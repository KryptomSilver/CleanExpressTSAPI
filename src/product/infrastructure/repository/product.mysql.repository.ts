import { pool } from "../../../database/mysql.config";
import ProductEntity from "../../domain/product.entity";
import ProductRepository from "../../domain/product.repository";

class ProductMysqlRepository implements ProductRepository {
  async creteProduct(product: ProductEntity): Promise<ProductEntity | null> {
    try {
      const [rows]: any = await pool.query(
        `INSERT INTO products (name,description)
          VALUES('${product.name}','${product.description}')`,
      )
      return rows
    } catch (error: any) {
      console.log("ERROR MYSQL REPOSITORY", error);
      return null
    }
  }
  async getAllProducts(): Promise<ProductEntity[] | null> {
    try {
      const [rows]: any = await pool.query(`SELECT * FROM products;`)
      return rows
    } catch (error: any) {
      console.log("ERROR MYSQL REPOSITORY", error)
      return null
    }
  }
  async getProductById(idProduct: number): Promise<ProductEntity | null> {
    try {
      const [rows]: any = await pool.query(`SELECT * FROM products WHERE idProduct = ${idProduct};`)
      return rows
    } catch (error: any) {
      console.log("ERROR MYSQL REPOSITORY", error)
      return null
    }
  }
  async updateProduct(idProduct: number, product: ProductEntity): Promise<ProductEntity | null> {
    try {
      const [rows]: any = await pool.query(`UPDATE products
      SET name = '${product.name}', description = '${product.description}'
      WHERE idProduct = ${idProduct};`)
      return rows
    } catch (error: any) {
      console.log("ERROR MYSQL REPOSITORY", error)
      return null
    }
  }
  async deleteProduct(idProduct: number): Promise<boolean> {
    try {
      await pool.query(`DELETE FROM products WHERE idProduct = ${idProduct};`)
      return true
    } catch (error: any) {
      console.log("ERROR MYSQL REPOSITORY", error)
      return false
    }
  }
}

export default ProductMysqlRepository
