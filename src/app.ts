import dotenv from "dotenv";
import express from "express";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") })
import { checkDBMySQL } from "./database/mysql.config";

const app = express()

checkDBMySQL()
export default app
