import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({
  path: "./.env",
});


const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  }),
);

app.use(express.json());
app.use(cookieParser());
// Routes
import userRouter from "./routes/user.routes.js";
import postRoutes from "./routes/post.routes.js";
import errorHandler from "./middlewares/errorHandler.middlewares.js";
// Routes Declaration
app.use("/api/v1/users", userRouter); // User routes
app.use("/api/v1/posts", postRoutes); // Post Routes
app.use(errorHandler)

export { app };
