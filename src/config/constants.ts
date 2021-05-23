import * as dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";
export const PORT = process.env.PORT || 4000;
export const SALT_ROUNDS = 10;
