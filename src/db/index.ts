import { Context, Next } from 'hono';
import { D1Binding, UseDB } from './types';
import { drizzle } from 'drizzle-orm/d1';

export default async (c: Context<{ Bindings: D1Binding; Variables: UseDB }>, next: Next) => {
	c.set('db', drizzle(c.env.db));
	return await next();
};
