import { Hono } from "hono";
import { logger } from "hono/middleware";

const signup = new Hono();

signup.use("*", logger());
signup.post("/webauthn", (c) => {
  return c.text("webauthn");
});

signup.post("/webauthn/verify", (c) => {
  return c.text("webauthn");
});

export default signup;
