import dotenv from "dotenv";
import express from "express";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") })
import { checkDBMySQL } from "./database/mysql.config";
import ProductRouter from "./product/infrastructure/route/product.router";

const app = express()
checkDBMySQL()

app.use("/api/v1/products", ProductRouter)

export default app
