import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { generateAccessAndRefreshTokens } from "../helpers/generateAccessAndRefreshTokens.js";
import asyncHandler from "../utils/AsyncHandler.js";
import User from "../models/user.models.js";
import jwt from "jsonwebtoken";

const options = {
  httpOnly: true,
  secure: true,
};

const registerUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if ([username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({ username });

  if (existedUser) {
    throw new ApiError(422, "Username already taken");
  }

  const user = await User.create({
    username: username.toLowerCase(),
    password,
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Internal server error");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, createdUser, "User Created successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if ([username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  const user = await User.findOne({ username }).select("-refreshToken");

  if (!user) {
    throw new ApiError(401, "Invalid Credentials");
  }

  const isPasswordValid = await user.isPasswordValid(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid Credentials");
  }

  const loggedInUser = await User.findById(user._id).select(
    "-password -refreshToken -updatedAt",
  );

  const { refreshToken, accessToken } = await generateAccessAndRefreshTokens(
    user._id,
  );

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          loggedInUser,
          accessToken,
          refreshToken,
        },
        "User logged in successfully",
      ),
    );
});

const logoutUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const loggedOutUser = await User.findByIdAndUpdate(
    userId,
    {
      $unset: {
        refreshToken: "",
      },
    },
    {
      new: true,
    },
  );

  console.log(`loggedOutUser ${loggedOutUser}`);

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken;

  if (!incomingRefreshToken) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET,
    );

    const user = await User.findById(decodedToken._id);

    if (!user) {
      throw new ApiError(401, "Invalid refresh Token");
    }

    if (incomingRefreshToken !== user.refreshToken) {
      throw new ApiError(401, "Refresh token is expired or used");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id,
    );

    console.log(`generated access token : ${accessToken}`);
    console.log(`generated refresh token : ${refreshToken}`);

    return res
      .status(200)
      .cookie("refreshToken", refreshToken, options)
      .cookie("accessToken", accessToken, options)
      .json(
        new ApiResponse(
          200,
          { accessToken, refreshToken },
          "Access token refresh",
        ),
      );
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid refresh token");
  }
});

export { registerUser, loginUser, logoutUser, refreshAccessToken };
