import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: "./my.db",
  },
} satisfies Config;
