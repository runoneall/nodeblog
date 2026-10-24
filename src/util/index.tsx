import { Context, Next } from 'hono';
import { UseConfig } from '../config/types';
import { UseUtil } from './types';

export default async (c: Context<{ Variables: UseConfig & UseUtil }>, next: Next) => {
	const config = c.get('config');

	c.set('css', ({ filepath }) => <link rel="stylesheet" href={`/style/${config.theme_name}/${filepath}.css`} />);
	c.set('js', ({ filepath }) => <script defer src={`/script/${config.theme_name}/${filepath}.js`}></script>);
	c.set('favicon', ({}) => (
		<>
			<link rel="shortcut icon" href="/favicon/shortcut-icon.ico" type="image/x-icon" />
			<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
		</>
	));

	return await next();
};
