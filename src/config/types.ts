type Config = {
	password_hash: string;
	jwt_secret: string;
	site_name: string;
	theme_name: string;
	post_per_page: number;
	extra_css: string;
	extra_js: string;
};

export type UseConfig = {
	config: Config;
};
