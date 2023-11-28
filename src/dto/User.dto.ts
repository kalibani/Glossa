import { Document } from "mongoose";
export interface USER extends Document {
  id: string;
  email: string;
  hashed_password: string;
}
