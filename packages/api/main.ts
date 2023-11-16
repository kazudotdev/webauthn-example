import { Hono } from "hono";
import signup from "./src/signup.ts";
const app = new Hono();

app.get("/", (c) => c.text("Hello"));
app.route("/signup", signup);
Deno.serve(app.fetch);
