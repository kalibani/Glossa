import express from "express";
import dotenv from "dotenv";

import { SignUp, SignIn } from "./routes";

dotenv.config();

const { PORT } = process.env;

const app = express();
app.use(express.json());

app.use("/register", SignUp);

app.use("/login", SignIn);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
