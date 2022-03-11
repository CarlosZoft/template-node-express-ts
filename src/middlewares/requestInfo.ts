import type { Request, Response, NextFunction } from 'express';

export function requestInfo(request: Request, _response: Response, next: NextFunction) {
    console.time('Request');
    console.log(`URL: ${request.url}, method: ${request.method}`);
    next();
    console.timeEnd('Request');
}
