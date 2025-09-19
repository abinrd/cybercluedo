
import {
  pgTable,
  uuid,
  timestamp,
  text,
  unique,
  primaryKey,
} from 'drizzle-orm/pg-core';

export const users = pgTable(
  'users',
  {
    id: uuid().defaultRandom().primaryKey().notNull(),
    createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
    name: text().notNull(),
    email: text().notNull(),
    password: text().notNull(),
  },
  (table) => [unique('users_email_key').on(table.email)]
);

export const teams = pgTable('teams', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  name: text('name').notNull(),
  ownerId: uuid('owner_id')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  points: text('points').default('0').notNull(),
});
export const teamMembers = pgTable(
  'team_members',
  {
    teamId: uuid('team_id')
      .references(() => teams.id, { onDelete: 'cascade' })
      .notNull(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    role: text('role').default('member').notNull(),
    joinedAt: timestamp('joined_at', { withTimezone: true, mode: 'string' })
      .defaultNow()
      .notNull(),
	
  },
  (t) => [primaryKey({ columns: [t.teamId, t.userId] })]
);

export const events = pgTable('events', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at', { withTimezone: true, mode: 'string' })
    .defaultNow()
    .notNull(),
  name: text('name').notNull(),
  teamId: uuid('team_id')
    .references(() => teams.id, { onDelete: 'cascade' })
    .notNull(),
  createdByUserId: uuid('created_by_user_id')
    .references(() => users.id, { onDelete: 'set null' })
    .notNull(),
});
