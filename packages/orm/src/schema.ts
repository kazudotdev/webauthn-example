import { sql } from "drizzle-orm";
import { text, integer, sqliteTable, blob } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id", { mode: "text" }).primaryKey().notNull(),
  email: text("email", { mode: "text" }).unique(),
  verified: integer("verified", { mode: "boolean" }).default(false),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const credentials = sqliteTable("credentials", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  counter: integer("counter").default(0),
  publicKey: blob("public_key", { mode: "buffer" }).notNull(),
  externalId: text("external_id", { mode: "text" }).notNull(),
});

export const sessions = sqliteTable("sessions", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, {
      onDelete: "cascade",
    }),
});
