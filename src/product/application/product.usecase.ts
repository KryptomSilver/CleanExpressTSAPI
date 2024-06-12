import ProductEntity from "../domain/product.entity";
import ProductRepository from "../domain/product.repository";
import ProductValue from "../domain/product.value";

class ProductUseCase {
  constructor(
    private readonly productRepository: ProductRepository
  ) { }
  public registerProduct = async (
    name: string,
    description: string
  ) => {
    const productValue = new ProductValue({
      name,
      description
    })
    const productCreated = await this.productRepository.creteProduct(productValue)
    return productCreated
  }
  public fetchAllProducts = async () => {
    const products = await this.productRepository.getAllProducts()
    return products
  }
  public fetchProductById = async (idProduct: number) => {
    const product = await this.productRepository.getProductById(idProduct)
    return product
  }
  public modifyProductById = async (idProduct: number, product: ProductEntity) => {
    const productValue = new ProductValue(product)
    const productUpdated = await this.productRepository.updateProduct(idProduct, productValue)
    return productUpdated
  }
  public removeProductById = async (idProduct: number) => {
    const productDeleted = await this.productRepository.deleteProduct(idProduct)
    return productDeleted
  }
}

export default ProductUseCase
