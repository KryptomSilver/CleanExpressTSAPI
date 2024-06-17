import { AuthenticationEntity, UserAuthenticated } from "./authentication.entity";

export class AuthenticationValue implements AuthenticationEntity {
  access_token: string;
  user: UserAuthenticated;
  constructor(access_token: string, user: UserAuthenticated) {
    this.user = user;
    this.access_token = access_token;
  }
}
