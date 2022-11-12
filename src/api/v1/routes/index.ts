import express, { Router } from "express";

import userRoute from "./user.route";
import citizenRoute from "./citizen.route";
import stateRoute from "./state.route";
import wardRoute from "./ward.route";
import lgaRoute from "./lga.route";

const router: Router = express.Router();

router.use("/users", userRoute);

router.use("/citizens", citizenRoute);
router.use("/states", stateRoute);
router.use("/wards", wardRoute);
router.use("/lgas", lgaRoute);

export default router;
