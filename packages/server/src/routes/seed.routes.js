import express from "express";
import { seedAdmin } from "../controllers/seed.controllers.js";
const router = express.Router();

router.route("/seed").post(seedAdmin);

export default router;
