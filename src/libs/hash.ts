import { genSaltSync, hashSync } from "bcrypt";

const salt = genSaltSync(10);

const handleHashPassword = (password: string) => hashSync(password, salt);
export { handleHashPassword };
