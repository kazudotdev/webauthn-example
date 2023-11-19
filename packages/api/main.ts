import { Hono } from "hono";
import { serveStatic } from "hono/middleware";
import register from "./src/register.ts";
const app = new Hono();

app.get("/", (c) => c.text("Hello"));
app.get("/test", serveStatic({ path: "./index.html" }));
app.route("/register", register);
Deno.serve(app.fetch);
