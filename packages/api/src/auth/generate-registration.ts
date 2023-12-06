import { generateRegistrationOptions } from "@simplewebauthn/server";
import { Hono } from "hono";
import { logger } from "hono/middleware";
import { setChallenge } from "../db.ts";

const generateRegistration = new Hono();
generateRegistration.use("*", logger());
generateRegistration.post("/generate-registration", async (c) => {
  const { username } = await c.req.json<{ username?: string }>();
  if (!username) return c.text("no username", 400);
  const { hostname } = new URL(c.req.url);

  const rpID = hostname;
  const rpName = hostname;

  const uuid = crypto.randomUUID();

  const options = await generateRegistrationOptions({
    rpName,
    rpID,
    attestationType: "none",
    userName: username,
    userID: uuid,
    authenticatorSelection: {
      residentKey: "required",
      userVerification: "required",
    },
  });

  await setChallenge(uuid, options.challenge);

  return c.json(options);
});
export default generateRegistration;
