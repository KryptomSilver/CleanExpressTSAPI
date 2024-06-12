import ProductEntity from "./product.entity";

class ProductValue implements ProductEntity {
  idProduct: number;
  name: string;
  description: string;
  constructor({
    name,
    description
  }: {
    name: string
    description: string
  }) {
    this.name = name
    this.description = description
    this.idProduct = 0
  }
}

export default ProductValue
