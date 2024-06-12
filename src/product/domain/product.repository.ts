import ProductEntity from "./product.entity"

interface ProductRepository {
  creteProduct(product: ProductEntity): Promise<ProductEntity | null>
  getAllProducts(): Promise<ProductEntity[] | null>
  getProductById(idProduct: number): Promise<ProductEntity | null>
  updateProduct(idProduct: number, product: ProductEntity): Promise<ProductEntity | null>
  deleteProduct(idProduct: number): Promise<boolean>
}

export default ProductRepository
