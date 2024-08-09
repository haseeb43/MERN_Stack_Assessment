import express from "express";
import {
  createPost,
  allPosts,
  deletePost,
} from "../controllers/post.controllers.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.route("/create").post(verifyJwt, verifyAdmin, createPost);
router.route("/posts").get(verifyJwt, allPosts);
router.route("/delete/:id").delete(verifyJwt, verifyAdmin, deletePost);

export default router;
