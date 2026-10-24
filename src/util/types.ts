import { FC } from 'hono/jsx';

export type UseUtil = {
	css: FC<{ filepath: string }>;
	js: FC<{ filepath: string }>;
	favicon: FC<{}>;
};
