import { Hono } from "hono";
import { serveStatic } from "hono/middleware";
import generateRegistration from "./auth/generate-registration.ts";
import verifyRegistration from "./auth/verify-registration.ts";
import generateAuthentication from "./auth/generate-authentication.ts";
import verifyAuthentication from "./auth/verify-authentication.ts";
const app = new Hono();

app.get("/", (c) => c.text("Hello"));
app.get("/test", serveStatic({ path: "./src/index.html" }));
app.route("/auth", generateRegistration);
app.route("/auth", verifyRegistration);
app.route("/auth", generateAuthentication);
app.route("/auth", verifyAuthentication);
Deno.serve(app.fetch);
