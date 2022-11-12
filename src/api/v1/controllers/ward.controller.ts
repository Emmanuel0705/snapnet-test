import { Request, Response } from "express";

import { Ward, WardType } from "../../../models/ward.entity";

class WardController {
    public async getAllWards(req: Request, res: Response) {
        const wards: WardType[] = await Ward.find();
        res.status(200).json({
            status: "SUCCESS",
            data: {
                wards,
            },
        });
    }
    public async createWard(req: Request, res: Response) {
        const { body } = req;

        const ward = await Ward.create(body);
        res.status(200).json({
            status: "SUCCESS",
            data: {
                ward,
            },
        });
    }
}

export default WardController;
