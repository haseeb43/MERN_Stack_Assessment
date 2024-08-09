import asyncHandler from "../utils/AsyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
const createPost = asyncHandler(async (req, res, next) => {
  res.status(200).json(new ApiResponse(200, "Admin Can Create posts"));
});

export { createPost };
