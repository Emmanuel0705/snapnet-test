import express, { Router } from "express";

import LgaController from "../controllers/lga.contoller";
import catchAsync from "../../../utils/catchAsync";
import auth from "../../../middlewares/auth";

const router: Router = express.Router();

const controller = new LgaController();

router.use(auth);

router.post("/", catchAsync(controller.createLga));
router.get("/", catchAsync(controller.getAllLgas));

export default router;
