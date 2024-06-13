import UserEntity from "./user.entity";

class UserValue implements UserEntity {
  idUser: number;
  name: string;
  password: string;
  constructor({ name, password }: { name: string, password: string }) {
    this.name = name
    this.password = password
    this.idUser = 0
  }
}

export default UserValue
