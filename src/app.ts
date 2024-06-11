import dotenv from "dotenv";
import express from "express";
import path from "path";
import { checkDBMySQL } from "./database/mysql.config";

dotenv.config({ path: path.resolve(__dirname, "../.env") })
const app = express()

checkDBMySQL()
export default app
