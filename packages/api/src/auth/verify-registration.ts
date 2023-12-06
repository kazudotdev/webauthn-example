import { verifyRegistrationResponse } from "@simplewebauthn/server";
import {
  RegistrationResponseJSON,
  PublicKeyCredentialUserEntityJSON,
  AuthenticatorDevice,
} from "@simplewebauthn/typescript-types";
import { Hono } from "hono";
import { logger } from "hono/middleware";

import { getChallenge, addAuthenticator, createUser } from "../db.ts";

const verifyRegistration = new Hono();
verifyRegistration
  .use("*", logger())
  .post("/verify-registration", async (c) => {
    const { hostname } = new URL(c.req.url);
    const rpID = hostname;
    const protocol = hostname === "localhost" ? "http" : "https";
    const origin = `${protocol}://${rpID}${
      hostname === "localhost" ? ":8000" : ""
    }`;
    const { registration, user } = await c.req.json<{
      registration: RegistrationResponseJSON;
      user: PublicKeyCredentialUserEntityJSON;
    }>();
    const uuid = user.id;
    const username = user.name;

    const challenge = await getChallenge(uuid);
    if (!challenge) return c.text("No challenge", 400);

    const verification = await verifyRegistrationResponse({
      response: registration,
      expectedChallenge: challenge,
      expectedOrigin: origin,
      expectedRPID: rpID,
    });

    const { verified, registrationInfo } = verification;
    if (!verified || !registrationInfo) {
      return c.json({ error: "Registration failed" }, 400);
    }
    const { credentialID, credentialPublicKey, counter } = registrationInfo;

    const authenticator: AuthenticatorDevice = {
      credentialID,
      credentialPublicKey,
      counter,
    };
    try {
      await addAuthenticator(uuid, authenticator);
      await createUser(username, uuid);
    } catch (error) {
      return c.json({ error: error.message }, 400);
    }
    return c.json({ success: true });
  });
export default verifyRegistration;
