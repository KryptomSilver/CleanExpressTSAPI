import dotenv from "dotenv";
import express from "express";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") })
import { checkDBMySQL } from "./database/mysql.config";
import ProductRouter from "./product/infrastructure/route/product.router";
import bodyParser from "body-parser";

const app = express()
checkDBMySQL()

app.use(bodyParser.json())
app.use("/api/v1/products", ProductRouter)

export default app
