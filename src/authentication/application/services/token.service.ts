import * as jwt from "jsonwebtoken"

class TokenService {
  constructor() { }
  public generateToken = (payload: any) => {
    const tokenEncrypted = jwt.sign(payload, `${process.env.APP_ACCESS_TOKEN_SECRET}`)
    return tokenEncrypted
  }
  public decodeToken = (token: string) => {
    const decodedToken = jwt.verify(token, `${process.env.APP_ACCESS_TOKEN_SECRET}`)
    return decodedToken
  }
}

export default TokenService
