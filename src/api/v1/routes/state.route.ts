import express, { Router } from "express";

import StateController from "../controllers/state.controller";
import catchAsync from "../../../utils/catchAsync";
import auth from "../../../middlewares/auth";

const router: Router = express.Router();

const controller = new StateController();

router.use(auth);
router.post("/", catchAsync(controller.createState));
router.get("/", catchAsync(controller.getAllStates));

export default router;
