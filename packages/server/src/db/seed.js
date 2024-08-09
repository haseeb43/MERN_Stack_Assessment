import dotenv from "dotenv";

import User from "../models/user.models.js";
import { ADMIN_ROLE } from "../constants.js";
import connectDb from "../db/index.js";
import { disconnectDB } from "../db/index.js";
dotenv.config({
  path: "./packages/server/.env",
});

(async () => {
  try {
    await connectDb();
    await User.create({
      username: "userfrdomseedfile",
      password: "protectedpassword",
      role: ADMIN_ROLE,
    });

    console.log("Successfully seed data");
  } catch (error) {
    console.log(`error while seeding ${error}`);
  } finally {
    await disconnectDB();
    process.exit(0);
  }
})();
