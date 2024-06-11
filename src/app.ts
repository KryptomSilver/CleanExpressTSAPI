import express from "express";
import { checkDBMySQL } from "./database/mysql.config";

const app = express()

checkDBMySQL()
export default app
