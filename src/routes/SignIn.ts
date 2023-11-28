import express from "express";
import { SignIn } from "../controllers";

const router = express.Router();

router.post("/login", SignIn);
// router.get("/vendors", GetUsers);

// router.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.json({ message: "Hello from admin" });
// });
export { router as SignIn };
