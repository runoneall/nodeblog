import { DrizzleD1Database } from 'drizzle-orm/d1';

export type D1Binding = {
	db: D1Database;
};

export type UseDB = {
	db: DrizzleD1Database;
};
