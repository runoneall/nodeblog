import { Context, Next } from 'hono';
import { UseDB } from '../db/types';
import { UseConfig } from './types';
import ConfigTable from './config-table';
import { sql } from 'drizzle-orm';
import { createHash, randomBytes } from 'node:crypto';

export default async (c: Context<{ Variables: UseDB & UseConfig }>, next: Next) => {
	const db = c.get('db');

	try {
		const config_in_db = await db.select().from(ConfigTable).get();
		if (!config_in_db) {
			throw null;
		}

		c.set('config', config_in_db);
	} catch {
		await db.run(sql`
            CREATE TABLE IF NOT EXISTS config (
                id INTEGER PRIMARY KEY CHECK (id = 1),
                password_hash TEXT NOT NULL,
                jwt_secret TEXT NOT NULL,
                site_name TEXT NOT NULL,
                theme_name TEXT NOT NULL,
                post_per_page INTEGER NOT NULL,
                extra_css TEXT NOT NULL,
                extra_js TEXT NOT NULL
            );
        `);

		const default_config = {
			password_hash: createHash('sha256').update('admin').digest('hex'),
			jwt_secret: randomBytes(32).toString('hex'),
			site_name: 'nodeblog',
			theme_name: 'default',
			post_per_page: 10,
			extra_css: '',
			extra_js: '',
		};

		await db.insert(ConfigTable).values(default_config).onConflictDoNothing();
		c.set('config', default_config);
	}

	return await next();
};
