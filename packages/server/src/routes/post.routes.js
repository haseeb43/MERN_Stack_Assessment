import express from "express";
import {
  createPost,
  getPost,
  allPosts,
  deletePost,
} from "../controllers/post.controllers.js";
import { verifyAdmin } from "../middlewares/verifyAdmin.middlewares.js";
import { verifyJwt } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.route("/").post(verifyJwt, verifyAdmin, createPost);
router.route("/:id").get(verifyJwt, getPost);
router.route("/").get(verifyJwt, allPosts);
router.route("/:id").delete(verifyJwt, verifyAdmin, deletePost);

export default router;