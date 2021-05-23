import * as dotenv from "dotenv";
import path from "path";
import { IS_DEVELOPMENT } from "./constants";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const dbName = process.env.DB_NAME || "school";
export const dbUser = process.env.DB_USER || "root";
export const dbPass = process.env.DB_PASS || "password";
export const dbHost = process.env.DB_PORT || "localhost";
export const jwtSecret = process.env.JWT_SECRET || "jwt secret";
