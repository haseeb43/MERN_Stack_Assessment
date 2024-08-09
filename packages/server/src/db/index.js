import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );

    console.log(
      `Connected to MongoDb !! Host : ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.error(`MongoDb connection error \n ${error}`);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await mongoose.disconnect();
};

export default connectDb;
export { disconnectDB };
