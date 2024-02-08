import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const $notes = pgTable("notes", {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    createAt: timestamp('create_at').notNull().defaultNow(),
    imageUrl: text('imageUrl'),
    userId: text('user_id').notNull(),
    editorState: text('editor_state'),
});

export type NoteType = typeof $notes.$inferInsert

//drizzle-orm is what is used to interface with the database. It is a simple and type-safe ORM for PostgreSQL
// drizle-kit is a set of tools for building web applications with drizzle-orm