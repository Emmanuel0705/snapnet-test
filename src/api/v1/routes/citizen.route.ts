import express, { Router } from "express";

import CitizenController from "../controllers/citizen.controller";
import catchAsync from "../../../utils/catchAsync";
import auth from "../../../middlewares/auth";
// import ValidateRequstParams from "../../../middlewares/requestValidator";
import restrictTo from "../../../middlewares/restrictTo";

const router: Router = express.Router();

const controller = new CitizenController();

router.use(auth);
router.get("/", catchAsync(controller.getAllCitizen));

router.post("/", restrictTo("ADMIN"), catchAsync(controller.createCitizen));

router.get("/:id", catchAsync(controller.getOneCitizen));

export default router;
