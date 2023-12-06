import { generateAuthenticationOptions } from "@simplewebauthn/server";
import { Hono } from "hono";
import { logger } from "hono/middleware";
import { getUUID, getAuthenticators, setChallenge } from "../db.ts";

const generateAuthentication = new Hono();
generateAuthentication.use("*", logger());
generateAuthentication.post("/generate-authentication", async (c) => {
  const { username } = await c.req.json<{ username?: string }>();
  if (!username) return c.text("no username", 400);

  const uuid = await getUUID(username).catch((err: Error) => {
    console.log("error:", err.message);
    return null;
  });
  if (!uuid) return c.json({ error: "no invalid uuid" }, 400);

  const authenticators = await getAuthenticators(uuid);
  const options = await generateAuthenticationOptions({
    allowCredentials: authenticators.map((authenticator) => ({
      id: authenticator.credentialID,
      type: "public-key",
      transport: authenticator.transports,
    })),
    userVerification: "required",
  });
  console.log({ uuid, challenge: options.challenge });
  await setChallenge(uuid, options.challenge);
  return c.json({ ...options, user: { id: uuid } });
});

export default generateAuthentication;
