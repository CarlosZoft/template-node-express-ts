import express from "express"
import { setUpRoutes } from "../../routes"
import { AppError } from "../../presentation/error"
import { requestInfo } from "../../middlewares"
import type { Express } from "express"

type IAppNorm = {
    app: Express;
    setConfig(): void;
    setMiddleware(): void;
    setRoutes(): void;
    setErrorHandle(): void;
}

class App implements IAppNorm {
	readonly app: Express
	constructor() {
		this.app = express()
		this.setConfig()
		this.setMiddleware()
		this.setRoutes()
		this.setErrorHandle()
	}

	setConfig() {
		this.app.use(express.json())
	}
	setMiddleware() {
		this.app.use(requestInfo)
	}
	setRoutes() {
		setUpRoutes(this.app)
	}
	setErrorHandle() {
		this.app.use(AppError)
	}
}

export default new App().app
