import { Context } from 'hono';

export default async (c: Context) => {
	return c.html(<span>Hello World!</span>);
};
