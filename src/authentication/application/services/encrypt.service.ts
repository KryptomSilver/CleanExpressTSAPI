import * as bcrypt from "bcrypt";

class EncryptService {
  public verifyPassword = async (passwordHashed: string, password: string) => {
    const isValid = await bcrypt.compare(password, passwordHashed)
    return isValid
  }
  public encryptPassword = async (password: string) => {
    const salts = 5
    const passwordHashed = await bcrypt.hash(password,salts)
    return passwordHashed
  }
}

export default EncryptService
