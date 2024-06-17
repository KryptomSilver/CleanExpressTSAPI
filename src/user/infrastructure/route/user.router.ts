import { Router } from "express";
import UserMyqlRepository from "../repository/user.mysql";
import UserUseCase from "../../application/user.usecase";
import UserController from "../controller/user.controller";

const router = Router()

const userMysqlRepepository = new UserMyqlRepository()
const userUseCase = new UserUseCase(userMysqlRepepository)
const userController = new UserController(userUseCase)

router.post("/", userController.insertCtrl)
router.get("/", userController.getCtrl)
router.get("/:idUser", userController.getByIdCtrl)
router.put("/:idUser", userController.updateCtrl)
router.delete("/:idUser", userController.deleteCtrl)

export default router
