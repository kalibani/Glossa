import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import { SignUp, SignIn } from "./routes";

dotenv.config();

const { PORT } = process.env;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/user", SignUp);

app.use("/user", SignIn);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
