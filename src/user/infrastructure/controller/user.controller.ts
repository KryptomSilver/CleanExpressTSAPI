import { Request, Response } from "express";
import UserUseCase from "../../application/user.usecase";

class UserController {
  constructor(private readonly userUseCase: UserUseCase) { }
  public insertCtrl = async (req: Request, res: Response) => {
    try {
      const { name, password } = req.body
      const user = await this.userUseCase.registerUser(name, password)
      return res.status(201).json(user)
    } catch (error: any) {
      console.log(error)
      return res.status(500)
    }
  }
  public getCtrl = async (req: Request, res: Response) => {
    try {
      const users = await this.userUseCase.fetchAllUsers()
      return res.status(200).json(users)
    } catch (error: any) {
      console.log(error);
      return res.status(500)
    }
  }
  public getByIdCtrl = async (req: Request, res: Response) => {
    try {
      const idUser = parseInt(req.params.idUser)
      const user = await this.userUseCase.fetchUserById(idUser)
      return res.status(200).json(user)
    } catch (error: any) {
      console.log(error);
    }
  }
  public updateCtrl = async (req: Request, res: Response) => {
    try {
      const idUser = parseInt(req.params.idUser)
      const { name, password } = req.body
      const updatedUser = await this.userUseCase.modifyUserById(idUser, name, password)
      return res.status(200).json(updatedUser)
    } catch (error: any) {
      console.log(error);
      return res.status(500)
    }
  }
  public deleteCtrl = async (req: Request, res: Response) => {
    try {
      const idUser = parseInt(req.params.idUser)
      const deletedUser = await this.userUseCase.removeUser(idUser)
      return res.status(200).json(deletedUser)
    } catch (error: any) {
      console.log(error);
      return res.status(500)
    }
  }
}

export default UserController
