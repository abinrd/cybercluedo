import { pgTable, foreignKey, uuid, timestamp, text, unique, primaryKey } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const teams = pgTable("teams", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	name: text().notNull(),
	ownerId: uuid("owner_id").notNull(),
	points: text().default('0').notNull(),
	final: text().default('0').notNull(),
	submitedTime: timestamp("submited_time", { withTimezone: true, mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.ownerId],
			foreignColumns: [users.id],
			name: "teams_owner_id_users_id_fk"
		}).onDelete("cascade"),
]);

export const events = pgTable("events", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	name: text().notNull(),
	teamId: uuid("team_id").notNull(),
	createdByUserId: uuid("created_by_user_id"),
}, (table) => [
	foreignKey({
			columns: [table.createdByUserId],
			foreignColumns: [users.id],
			name: "events_created_by_user_id_users_id_fk"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.teamId],
			foreignColumns: [teams.id],
			name: "events_team_id_teams_id_fk"
		}).onDelete("cascade"),
]);

export const users = pgTable("users", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	name: text(),
	email: text().notNull(),
	password: text().notNull(),
}, (table) => [
	unique("users_email_key").on(table.email),
]);

export const teamMembers = pgTable("team_members", {
	teamId: uuid("team_id").notNull(),
	userId: uuid("user_id").notNull(),
	role: text().default('member').notNull(),
	joinedAt: timestamp("joined_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.teamId],
			foreignColumns: [teams.id],
			name: "team_members_team_id_teams_id_fk"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "team_members_user_id_users_id_fk"
		}).onDelete("cascade"),
	primaryKey({ columns: [table.teamId, table.userId], name: "team_members_team_id_user_id_pk"}),
]);
