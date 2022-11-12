import express, { Router } from "express";

import StateController from "../controllers/state.controller";
import catchAsync from "../../../utils/catchAsync";
import { hashPassword } from "../../../middlewares/user";
// import ValidateRequstParams from "../../../middlewares/requestValidator";

const router: Router = express.Router();

const controller = new StateController();

router.post("/", catchAsync(hashPassword), catchAsync(controller.createState));
router.get("/", catchAsync(controller.getAllStates));

export default router;
