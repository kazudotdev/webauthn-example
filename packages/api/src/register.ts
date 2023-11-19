import { Hono } from "hono";
import { logger } from "hono/middleware";
import { getSignedCookie, setSignedCookie } from "hono/cookie";
import {
  generateRegistrationOptions,
  verifyRegistrationResponse,
} from "simplewebauthn/server";
import { RegistrationResponseJSON } from "simplewebauthn/typescript-types";

import config from "./config.ts";
import { user } from "./user.ts";
import Session from "./session.ts";
import { SessionData } from "./model.ts";
import { Credential } from "./credential.ts";

const register = new Hono();
register.use("*", logger());
register.post("/options", async (c) => {
  const { email } = await c.req.json<{ email: string }>();
  const userData = await user.add(email);

  if (!userData) return c.json("Internal Error", 500);

  const { id: userId } = userData;

  const options = await generateRegistrationOptions({
    rpName: config.rpName,
    rpID: config.rpID,
    userID: userId,
    userName: email,
    userDisplayName: email,
    authenticatorSelection: {
      residentKey: "required",
      userVerification: "required",
      authenticatorAttachment: "cross-platform",
    },
  });

  const session = new Session();
  const data = {
    ...userData,
    challenge: options.challenge,
  };
  await session.set<SessionData>(options.challenge, data, config.challengeTTL);

  await setSignedCookie(c, "userId", userId, config.secret, {
    httpOnly: true,
    secure: true,
    sameSite: "Strict",
    maxAge: config.challengeTTL,
  });

  return c.json(options);
});

register.post("/verify", async (c) => {
  const { credential } = await c.req.json<{
    email: string;
    credential: RegistrationResponseJSON;
  }>();
  const userId = await getSignedCookie(c, config.secret, "userId");
  if (!userId) return c.text("Unauthorized", 401);

  const clientData = JSON.parse(atob(credential.response.clientDataJSON));
  if (!clientData.challenge) {
    return c.text("Invalid challenge", 401);
  }

  const s = new Session();

  const session: SessionData | null = await s.get<SessionData>(
    clientData.challenge,
  );

  if (!session) return c.text("Invalid session data");

  const response = await verifyRegistrationResponse({
    response: credential,
    expectedChallenge: session.challenge,
    expectedRPID: config.rpID,
    expectedOrigin: c.req.header("origin") ?? "",
    requireUserVerification: true,
  });

  if (response.verified && response.registrationInfo) {
    const { credentialID, credentialPublicKey, counter, credentialDeviceType } =
      response.registrationInfo;

    await s.delete(clientData.challenge);

    // save credential
    const credentialId = credentialID.toString();
    await Credential.set(credentialId, {
      credentialId,
      credentialPublicyKey: credentialPublicKey,
      credentialDeviceType: credentialDeviceType as string,
      counter: counter,
      userId,
    });

    return c.json(response);
  }
  return c.text("Unauthorized", 401);
});

export default register;
