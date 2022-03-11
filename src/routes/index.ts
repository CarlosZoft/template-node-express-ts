import { Test } from './test';
import type { Express } from 'express';

export function setUpRoutes(app: Express) {
    app.use('/', new Test({}).router);
}
