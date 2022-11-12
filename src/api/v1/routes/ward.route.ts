import express, { Router } from "express";

import WardController from "../controllers/ward.controller";
import catchAsync from "../../../utils/catchAsync";
import auth from "../../../middlewares/auth";

const router: Router = express.Router();

const controller = new WardController();

router.use(auth);

router.post("/", catchAsync(controller.createWard));
router.get("/", catchAsync(controller.getAllWards));

export default router;
