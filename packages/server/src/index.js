import dotenv from "dotenv";
import connectDb from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.info(`Server is running or port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error(`MongoDb connection failed ${err}`);
  });
