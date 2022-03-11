import { HttpException } from "./httpException"
import type { Request, Response, NextFunction } from "express"

export async function AppError(
	error: HttpException,
	_request: Request,
	response: Response,
	_next: NextFunction,
): Promise<Response> {
	if (error instanceof Error) {
		return response.status(error.status || 406).json({ error: error.message })
		_next(error)
	}
	return response.status(500).json({
		status: "500",
		message: "Internal Server Error",
	})
}
