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
}

export default ProductUseCase
