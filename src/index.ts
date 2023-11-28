import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import mongoose from "mongoose";

import { SignUp, SignIn } from "./routes";
import { MONGO_URI } from "./config";

dotenv.config();

const { PORT } = process.env;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(SignUp);

app.use(SignIn);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("Error received= " + err);
  });

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
