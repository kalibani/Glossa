import { Request, Response } from "express";

import { client, handleHashPassword } from "../libs";
import { Users } from "../models";

export const SignIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await Users.findOne({ email: email }).exec();
  const hashed_password = handleHashPassword(password);

  if (!user || user.hashed_password !== hashed_password) {
    return res.status(400).json({
      message: "Invalid credentials.",
    });
  }
  // Create token for user
  const token = client.createToken(user.id);

  return res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
    },
  });
};
