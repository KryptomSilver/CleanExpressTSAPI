import { pool } from "../../../database/mysql.config";
import ProductEntity from "../../domain/product.entity";
import ProductRepository from "../../domain/product.repository";

class ProductMysqlRepository implements ProductRepository {
  getAllProducts(): Promise<ProductEntity[] | null> {
    throw new Error("Method not implemented.");
  }
  getProductById(idProduct: number): Promise<ProductEntity | null> {
    throw new Error("Method not implemented.");
  }
  updateProduct(idProduct: number, product: ProductEntity): Promise<ProductEntity | null> {
    throw new Error("Method not implemented.");
  }
  deleteProduct(idProduct: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
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
}

export default ProductMysqlRepository
