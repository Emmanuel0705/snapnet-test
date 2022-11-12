import AppError from "../utils/appError";
import { Request, Response, NextFunction } from "express";

export default (...roles: [any]) =>
    (req: any, res: Response, next: NextFunction) => {
        console.log(roles);
        // roles = 'ADMIN', 'SUPER_ADMIN', 'THIRD_PARTY'.

        if (!roles.includes(req.user.role)) {
            next(
                new AppError(
                    "You do not have permission to perform this action",
                    403
                )
            );
            return;
        }

        next();
    };
