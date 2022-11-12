import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
export const hashPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    req.body.password = hash;
    next();
};
