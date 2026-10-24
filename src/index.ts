import { Hono } from 'hono';
import db from './db';
import config from './config';
import util from './util';

const app = new Hono();
app.use(db);
app.use(config);
app.use(util);

export default app;
