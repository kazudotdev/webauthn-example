/// <reference lib="deno.unstable" />
import config from "./config.ts";

const db = await Deno.openKv(config.databasePath);

export default db;
