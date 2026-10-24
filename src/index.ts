import { Hono } from 'hono';
import view from './view';

const app = new Hono();

app.get('/', view);

export default app;
