import { Request, Response, Router, RouterOptions } from 'express';

export class Test {
    readonly router: Router;
    constructor(routerOptions: RouterOptions) {
        this.router = Router(routerOptions);
        this.setRoutes();
    }
    setRoutes() {
        this.router.get('/', (request: Request, response: Response) => {
            response.json('Hello World');
        });
    }
}
