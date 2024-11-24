import mongoose from "mongoose";
import express from "express";
import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";

const app = express();

dotenv.config({
  path: "./env",
});

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listning on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR", error);
    throw error;
  }
})();
