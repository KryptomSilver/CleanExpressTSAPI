import { Router } from "express";
import EncryptService from "../../application/services/encrypt.service";
import TokenService from "../../application/services/token.service";
import AuthenticationUseCase from "../../application/authentication.usecase";
import UserMyqlRepository from "../../../user/infrastructure/repository/user.mysql";
import AuthenticationController from "../controller/authentication.controller";

const router = Router()

const encryptService = new EncryptService()
const tokenService = new TokenService()
const userMysqlRepository = new UserMyqlRepository()
const authenticationUseCase = new AuthenticationUseCase(userMysqlRepository, tokenService, encryptService)
const authenticationController = new AuthenticationController(authenticationUseCase)

router.post("/login",authenticationController.insertCtrl)

export default router
