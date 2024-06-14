import UserEntity from "./user.entity";

interface UserRepository {
  createUser(user: UserEntity): Promise<UserEntity | null>
  getAllUsers(): Promise<UserEntity[] | null>
  getUserById(idUser: number): Promise<UserEntity | null>
  updateUser(idUser: number, user: UserEntity): Promise<UserEntity | null>
  deleteUser(idUser: number): Promise<boolean>
}

export default UserRepository
