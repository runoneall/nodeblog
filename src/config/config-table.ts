import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export default sqliteTable('config', {
	id: integer()
		.primaryKey()
		.$default(() => 1),

	password_hash: text().notNull(),
	jwt_secret: text().notNull(),
	site_name: text().notNull(),
	theme_name: text().notNull(),
	post_per_page: integer().notNull(),
	extra_css: text().notNull(),
	extra_js: text().notNull(),
});
