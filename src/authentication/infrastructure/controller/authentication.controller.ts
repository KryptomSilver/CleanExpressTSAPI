import { Request, Response } from "express";
import AuthenticationUseCase from "../../application/authentication.usecase";

class AuthenticationController {
  constructor(private readonly authenticationUseCase: AuthenticationUseCase) { }
  public insertCtrl = async (req: Request, res: Response) => {
    try {
      const { name, password } = req.body
      const userLogin = await this.authenticationUseCase.loginUser(name, password)
      return res.status(200).json(userLogin)
    } catch (error: any) {
      console.log(error)
      return res.status(500)
    }
  }
}

export default AuthenticationController
