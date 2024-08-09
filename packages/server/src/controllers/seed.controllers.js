import asyncHandler from "../utils/AsyncHandler.js";
import User from "../models/user.models.js";
import { ADMIN_ROLE } from "../constants.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const seedAdmin = asyncHandler(async (req, res, next) => {
  const admin = await User.create({
    username: "admin",
    password: "admin@softMindBlog",
    role: ADMIN_ROLE,
  });

  if (!admin) {
    throw new ApiError(500, "Something went wrong");
  }

  res.status(200).json(new ApiResponse(200, "You are good to go"));
});

export { seedAdmin };
