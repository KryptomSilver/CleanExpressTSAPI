import dotenv from "dotenv";
import express from "express";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") })
import { checkDBMySQL } from "./database/mysql.config";
import ProductRouter from "./product/infrastructure/route/product.router";
import UserRouter from "./user/infrastructure/route/user.router";
import AuthenticationRouter from "./authentication/infrastructure/router/authentication.router";
import bodyParser from "body-parser";

const app = express()
checkDBMySQL()

app.use(bodyParser.json())
app.use("/api/v1/products", ProductRouter)
app.use("/api/v1/users", UserRouter)
app.use("/api/v1/authentication", AuthenticationRouter)

export default app
