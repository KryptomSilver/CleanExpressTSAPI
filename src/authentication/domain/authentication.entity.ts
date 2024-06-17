import UserEntity from "../../user/domain/user.entity";

export interface UserAuthenticated extends Omit<UserEntity, 'password'> {}

export interface AuthenticationEntity {
  access_token: string
  user: UserAuthenticated
}

