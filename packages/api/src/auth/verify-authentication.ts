import { verifyAuthenticationResponse } from "@simplewebauthn/server";
import { Hono } from "hono";
import { logger } from "hono/middleware";
import type {
  AuthenticationResponseJSON,
  PublicKeyCredentialUserEntityJSON,
} from "@simplewebauthn/typescript-types";
import {
  getAuthenticator,
  getChallenge,
  updateAuthenticatorCounter,
} from "../db.ts";

const verifyAuthentication = new Hono();
verifyAuthentication.use("*", logger());
verifyAuthentication.post("/verify-authentication", async (c) => {
  const { hostname } = new URL(c.req.url);
  const rpID = hostname;
  const protocol = hostname === "localhost" ? "http" : "https";
  const origin = `${protocol}://${rpID}${
    hostname === "localhost" ? ":8000" : ""
  }`;
  const { registration, user } = await c.req.json<{
    registration?: AuthenticationResponseJSON;
    user?: PublicKeyCredentialUserEntityJSON;
  }>();

  if (!registration || !user) {
    return c.json({ error: "Invalid parameters." }, 400);
  }

  const uuid = user.id;

  const challenge = await getChallenge(uuid);
  if (!challenge) return c.json({ error: "No invalid challenge" }, 400);

  const { authenticator, err: getAuthError } = await getAuthenticator(
    uuid,
    registration.id,
  )
    .then((authenticator) => {
      return { authenticator, err: null };
    })
    .catch((err: Error) => {
      return { authenticator: null, err };
    });
  if (getAuthError) return c.json({ error: getAuthError.message });

  const param = {
    response: registration,
    expectedChallenge: challenge,
    expectedOrigin: origin,
    expectedRPID: rpID,
    authenticator,
  };
  const { verification, err: verifyAuthError } =
    await verifyAuthenticationResponse(param)
      .then((verification) => {
        return { verification, err: null };
      })
      .catch((err: Error) => {
        return { verification: null, err };
      });

  if (verifyAuthError) return c.json({ error: verifyAuthError.message }, 500);

  const { verified, authenticationInfo } = verification;
  if (!verified || !authenticationInfo)
    return c.json({ error: "Authentication failed" }, 400);

  const { newCounter } = authenticationInfo;

  await updateAuthenticatorCounter(uuid, authenticator, newCounter);

  return c.json({ success: true });
});

export default verifyAuthentication;
