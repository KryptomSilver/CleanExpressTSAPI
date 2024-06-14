import { pool } from "../../database/mysql.config";
import UserEntity from "../domain/user.entity";
import UserRepository from "../domain/user.repository";

class UserMyqlRepository implements UserRepository {
  async createUser(user: UserEntity): Promise<UserEntity | null> {
    try {
      const [rows]: any = await pool.query(`INSERT INTO users (name, password) 
      VALUES ('${user.name}', '${user.password}');`)
      return rows
    } catch (error: any) {
      console.log("ERROR IN MYSQL REPOSITORY", error)
      return null
    }
  }
  async getAllUsers(): Promise<UserEntity[] | null> {
    try {
      const [rows]: any = await pool.query(`SELECT * FROM users`)
      return rows
    } catch (error: any) {
      console.log("ERROR IN MYSQL REPOSITORY", error)
      return null
    }
  }
  async getUserById(idUser: number): Promise<UserEntity | null> {
    try {
      const [rows]: any = await pool.query(`SELECT * FROM users WHERE idUser = ${idUser}`)
      return rows[0]
    } catch (error: any) {
      console.log("ERROR IN MYSQL REPOSITORY", error)
      return null
    }
  }
  async updateUser(idUser: number, user: UserEntity): Promise<UserEntity | null> {
    try {
      const [rows]: any = await pool.query(`UPDATE users 
      SET name = '${user.name}', password = '${user.password}' WHERE idUser = ${idUser};`)
      return rows
    } catch (error) {
      console.log("ERROR IN MYSQL REPOSITORY", error)
      return null
    }

  }
  async deleteUser(idUser: number): Promise<boolean> {
    try {
      await pool.query(`DELETE FROM users WHERE idUser = ${idUser};`)
      return true
    } catch (error: any) {
      console.log("ERROR IN MYSQL REPOSITORY", error)
      return false
    }

  }

}
