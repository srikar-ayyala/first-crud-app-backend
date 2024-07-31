import { Response } from "express";

export const handleErrorBlock = (res: Response, error: any, statusCode: number = 500) => {
    if ("message" in error) {
        res.status(statusCode);
        res.status(statusCode).json({ message: error.message });
    } else {
        res.status(statusCode).json({ message: "Unknown error..." });
    }
}