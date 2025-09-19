import { relations } from "drizzle-orm/relations";
import { users, teams, events, teamMembers } from "./schema";

export const teamsRelations = relations(teams, ({one, many}) => ({
	user: one(users, {
		fields: [teams.ownerId],
		references: [users.id]
	}),
	events: many(events),
	teamMembers: many(teamMembers),
}));

export const usersRelations = relations(users, ({many}) => ({
	teams: many(teams),
	events: many(events),
	teamMembers: many(teamMembers),
}));

export const eventsRelations = relations(events, ({one}) => ({
	user: one(users, {
		fields: [events.createdByUserId],
		references: [users.id]
	}),
	team: one(teams, {
		fields: [events.teamId],
		references: [teams.id]
	}),
}));

export const teamMembersRelations = relations(teamMembers, ({one}) => ({
	team: one(teams, {
		fields: [teamMembers.teamId],
		references: [teams.id]
	}),
	user: one(users, {
		fields: [teamMembers.userId],
		references: [users.id]
	}),
}));