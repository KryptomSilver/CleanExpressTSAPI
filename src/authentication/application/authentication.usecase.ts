import UserRepository from "../../user/domain/user.repository";
import { AuthenticationValue } from "../domain/authentication.value";
import EncryptService from "./services/encrypt.service";
import TokenService from "./services/token.service";

class AuthenticationUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly tokenService: TokenService,
    private readonly encryptService: EncryptService
  ) { }

  public loginUser = async (user: string, password: string) => {
    const userExists = await this.userRepository.getUserByName(user)
    if (!userExists) return
    const isValidPassword = await this.encryptService.verifyPassword(userExists.password, password)
    if (!isValidPassword) return
    const token = this.tokenService.generateToken({ user: userExists.name })
    const valueAuthenticaiton = new AuthenticationValue(token, {
      name: userExists.name,
      idUser: userExists.idUser
    })
    return valueAuthenticaiton
  }
}

export default AuthenticationUseCase
