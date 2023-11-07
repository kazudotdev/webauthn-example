import * as schema from "./schema";
import studio, { Setup } from "@drizzle-team/studio";

import { Database } from "bun:sqlite";
import { drizzle } from "drizzle-orm/bun-sqlite";

const db = drizzle(new Database("my.db"));
const setup: Setup = {
  type: "sqlite",
  db,
  schema,
};

// @ts-expect-error
const server = await studio.prepareServer(setup);

const port = 5555;
const host = "127.0.0.1";

server.start({
  host,
  port,
  cb: (err: any, address: any) => {
    if (err) console.error(err);
    else console.log(`Drizzle Studio is up and running ${address}`);
  },
});
