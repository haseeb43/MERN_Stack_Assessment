import mongoose from "mongoose";
import asyncHandler from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import Post from "../models/post.models.js";

const createPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;
  const author = req.user._id;

  if ([title, content].some((item) => item.trim() === "")) {
    throw new ApiError(422, "All fields are required");
  }

  if (content.length < 10) {
    throw new ApiError(422, "Content must be at least 10 characters long");
  }

  const post = await Post.create({ title, content, author });

  if (!post) {
    throw new ApiError(500);
  }

  return res
    .status(200)
    .json(new ApiResponse(200, post, "Post created successfully"));
});

const getPost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(422, `${id} is not a valid id`);
  }

  const post = await Post.findById(id);

  if (!post) {
    throw new ApiError(404, "No post with this id found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, post, "Post found successfully"));
});

const allPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find().populate(
    "author",
    "-password -createdAt -updatedAt -refreshToken",
  );

  const data = { totalPosts: posts.length, posts };

  if (!posts.length) {
    return res
      .status(404)
      .json(new ApiResponse(404, data, "No post created yet"));
  }

  return res.status(200).json(new ApiResponse(200, data, "All posts"));
});

const deletePost = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(422, `${id} is not a valid id`);
  }

  const post = await Post.findById(id);

  if (!post) {
    throw new ApiError(404, "No post with this id found");
  }

  const deletedPost = await Post.findByIdAndDelete(id);

  if (!deletePost) {
    throw new ApiError(500, "Internal server error");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, deletedPost, "Post deleted successfully"));
});

const updatePost = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new ApiError(422, `${id} is not a valid id`);
  }

  if ([title, content].some((item) => item.trim() === "")) {
    throw new ApiError(422, "All fields are required");
  }

  if (content.length < 10) {
    throw new ApiError(422, "Content must be at least 10 characters long");
  }

  const post = await Post.findById(id);

  if (!post) {
    throw new ApiError(404, "No post with this id found");
  }

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    {
      title,
      content,
    },
    {
      new: true,
    },
  ).populate("author", "-password -createdAt -updatedAt -refreshToken");

  if (!updatedPost) {
    throw new ApiError(500, "Internal server error");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, updatedPost, "Post updated successfully"));
});

export { createPost, getPost, allPosts, deletePost, updatePost };
