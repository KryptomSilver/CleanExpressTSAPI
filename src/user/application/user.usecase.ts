import UserEntity from "../domain/user.entity";
import UserValue from "../domain/user.value";
import UserMyqlRepository from "../infrastructure/user.mysql";

class UserUseCase {
  constructor(private readonly userMysqlRepository: UserMyqlRepository) { }

  public registerUser = async (user: UserEntity) => {
    const userValue = new UserValue(user)
    const newUser = await this.userMysqlRepository.createUser(userValue)
    return newUser
  }
  public fetchAllUsers = async () => {
    const users = await this.userMysqlRepository.getAllUsers()
    return users
  }
  public fetchUser = async (idUser: number) => {
    const user = await this.userMysqlRepository.getUserById(idUser)
    return user
  }
  public modifyUser = async (idUser: number, user: UserEntity) => {
    const userValue = new UserValue(user)
    const updatedUser = await this.userMysqlRepository.updateUser(idUser, userValue)
    return updatedUser
  }
  public removeUser = async (idUser: number) => {
    const deletedUser = await this.userMysqlRepository.deleteUser(idUser)
    return deletedUser
  }
}

export default UserUseCase
