import { Request, Response } from "express";

import { State, StateType } from "../../../models/state.entity";

class StateController {
    public async getAllStates(req: Request, res: Response) {
        const states: StateType[] = await State.find();
        res.status(200).json({
            status: "SUCCESS",
            data: {
                states,
            },
        });
    }
    public async createState(req: Request, res: Response) {
        const { body } = req;

        const state = await State.create(body);
        res.status(200).json({
            status: "SUCCESS",
            data: {
                state,
            },
        });
    }
}

export default StateController;
