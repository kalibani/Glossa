import mongoose, { Schema } from "mongoose";
import { USER } from "../dto/User.dto";

const UserSchema = new Schema(
  {
    id: { type: String, required: true },
    email: { type: String, required: true },
    hashed_password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model<USER>("user", UserSchema);

export { Users };
