import { Request, Response } from "express";

import { Citizen, CitizenType } from "../../../models/citizen.entity";

class CitizenController {
    public async getAllCitizen(req: Request, res: Response) {
        const citizens: CitizenType[] = await Citizen.find();
        res.status(200).json({
            status: "SUCCESS",
            data: {
                citizens,
            },
        });
    }
    public async createCitizen(req: Request, res: Response) {
        const { body } = req;

        const citizen: CitizenType = await Citizen.create(body);
        res.status(200).json({
            status: "SUCCESS",
            data: {
                citizen,
            },
        });
    }
    public async getOneCitizen(req: Request, res: Response) {
        const { user } = req.params;

        const citizen: any = await Citizen.findOne((user as any)._id);
        res.status(200).json({
            status: "SUCCESS",
            data: {
                citizen,
            },
        });
    }
}

export default CitizenController;
