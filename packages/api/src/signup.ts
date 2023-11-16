import { Hono } from "hono";
import { db } from "@webauthn/orm";
import config from "./config";
const signup = new Hono();

signup.post("/webauthn", async (c) => {
  const { email } = await c.req.json<{ email: string }>();
  // find by email and userid
  // 未登録の場合は登録処理へ、
  // 登録済みであればエラー
  return c.text("webauthn");
});

signup.post("/webauthn/verify", (c) => {
  return c.text("webauthn/verify");
});

export default signup;
