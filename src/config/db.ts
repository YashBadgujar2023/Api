
import mongoose from "mongoose";
import { config } from "./config";
import { Console } from "console";
const connectdb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("connected to database sucessfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to database", err);
    });
    await mongoose.connect(config.databaseUrl as string);
  } catch (err) {
    console.error("Failed to connect to database.", err);
    process.exit();
  }
};

export default connectdb;
