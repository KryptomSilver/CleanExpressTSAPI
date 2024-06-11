import dotenv from "dotenv";
import express from "express";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, "../.env") })
const app = express()

export default app
