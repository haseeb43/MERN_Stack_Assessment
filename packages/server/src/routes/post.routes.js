import express from "express";
import { createPost } from "../controllers/post.controllers.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.route("/create").post(verifyJwt, verifyAdmin, createPost);

export default router;
