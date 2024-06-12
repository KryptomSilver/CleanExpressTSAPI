import { Router } from "express";
import ProductMysqlRepository from "../repository/product.mysql.repository";
import ProductUseCase from "../../application/product.usecase";
import ProductController from "../controller/product.controller";

const router = Router()

const productMysqlRepository = new ProductMysqlRepository()
const productUseCase = new ProductUseCase(productMysqlRepository)
const productCtrl = new ProductController(productUseCase)

router.post("/", productCtrl.insertCtrl)

export default router
