import UserValue from "../domain/user.value";
import UserMyqlRepository from "../infrastructure/repository/user.mysql";

class UserUseCase {
  constructor(private readonly userMysqlRepository: UserMyqlRepository) { }

  public registerUser = async (name: string, password: string) => {
    const userValue = new UserValue({ name, password })
    const newUser = await this.userMysqlRepository.createUser(userValue)
    return newUser
  }
  public fetchAllUsers = async () => {
    const users = await this.userMysqlRepository.getAllUsers()
    return users
  }
  public fetchUserById = async (idUser: number) => {
    const user = await this.userMysqlRepository.getUserById(idUser)
    return user
  }
  public modifyUserById = async (idUser: number, password: string, name: string) => {
    const userValue = new UserValue({ name, password })
    const updatedUser = await this.userMysqlRepository.updateUser(idUser, userValue)
    return updatedUser
  }
  public removeUser = async (idUser: number) => {
    const deletedUser = await this.userMysqlRepository.deleteUser(idUser)
    return deletedUser
  }
}

export default UserUseCase
