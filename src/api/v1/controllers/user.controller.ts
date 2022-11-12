import { Request, Response } from "express";

import { User, UserType } from "../../../models/user.entity";
import AppError from "../../../utils/appError";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signJwt = (userId: string): string => {
    return jwt.sign({ userId }, process.env.JWT_SECRET as string, {
        expiresIn: "30d",
    });
};

class USerController {
    public async CreateUser(req: Request, res: Response) {
        const { body } = req;

        const user: UserType | any = await User.create(body);

        user.password = undefined;

        res.status(200).json({
            status: "SUCCESS",
            data: {
                user,
            },
        });
    }

    public async signIn(req: Request, res: Response) {
        const { email, password } = req.body;

        const user: UserType | any = (await User.findOne({ email })) as any;
        if (!user) throw new AppError("Invalid login details", 400);

        const validLogin = await bcrypt.compare(password, user.password);
        if (!validLogin) throw new AppError("Invalid login details", 400);

        const token = signJwt((user as any)._id);

        user.password = undefined;

        res.status(200).json({
            status: "SUCCESS",
            data: {
                token,
                user,
            },
        });
    }
}

export default USerController;
