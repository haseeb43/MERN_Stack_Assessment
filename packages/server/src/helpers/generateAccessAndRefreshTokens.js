import User from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";

const generateAccessAndRefreshTokens = async (id) => {
  try {
    const user = await User.findById(id);
    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.log(`error in catch part of token generation ${error}`);
    throw new ApiError(
      500,
      "Something while generating access and refresh token",
    );
  }
};

export { generateAccessAndRefreshTokens };
