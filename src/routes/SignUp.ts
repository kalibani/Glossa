import express from "express";
import { SignUp } from "../controllers";

const router = express.Router();

router.post("/register", SignUp);
// router.get("/vendors", GetUsers);

// router.get("/", (req: Request, res: Response, next: NextFunction) => {
//   res.json({ message: "Hello from admin" });
// });
export { router as SignUp };
