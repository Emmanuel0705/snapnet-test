import { Request, Response } from "express";

import { Lga, LgaType } from "../../../models/lga.entity";

class LgaController {
    public async getAllLgas(req: Request, res: Response) {
        const lgas: LgaType[] = await Lga.find();
        res.status(200).json({
            status: "SUCCESS",
            data: {
                lgas,
            },
        });
    }
    public async createLga(req: Request, res: Response) {
        const { body } = req;

        const lga = await Lga.create(body);
        res.status(200).json({
            status: "SUCCESS",
            data: {
                lga,
            },
        });
    }
}

export default LgaController;
