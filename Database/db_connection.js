import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose
  .connect(process.env.database_url)
  .then(() => {
    console.log("Database connected....");
  })
  .catch((error) => {
    console.log("connection error...", error);
  });
