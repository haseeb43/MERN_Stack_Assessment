import mongoose from "mongoose";
import asyncHandler from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import Post from "../models/post.models.js";

const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const author = req.user._id;

  if ([title, content].some((item) => item.trim() === "")) {
    throw new ApiError(409, "All fields are required");
  }

  if (content.length < 10) {
    throw new ApiError(409, "Content must be at least 10 characters long");
  }

  const post = await Post.create({ title, content, author });

  if (!post) {
    throw new ApiError(500, "Something went wrong while creating post");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, post, "Post created successfully"));
});

const allPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate(
    "author",
    "-password -createdAt -updatedAt -__v -refreshToken",
  );

  if (!posts.length) {
    throw new ApiError(404, "No posts available");
  }

  const data = { totalPosts: posts.length, posts };

  return res.status(200).json(new ApiResponse(200, data, "All posts"));
});

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(409, `${id} is not a valid id`);
  }

  const post = await Post.findById(id);

  if (!post) {
    throw new ApiError(404, "No post with this id found");
  }

  const deletedPost = await Post.findByIdAndDelete(id);

  if (!deletePost) {
    throw new ApiError(500, "Something went wront while deleting a post");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, deletedPost, "Post deleted successfully"));
});

export { createPost, allPosts, deletePost };
