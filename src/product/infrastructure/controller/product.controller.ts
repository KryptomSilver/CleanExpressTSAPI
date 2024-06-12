import { Request, Response } from "express";
import ProductUseCase from "../../application/product.usecase";

class ProductController {
  constructor(private readonly productUseCase: ProductUseCase) { }
  public insertCtrl = async (req: Request, res: Response) => {
    try {
      const { name, description } = req.body
      const product = await this.productUseCase.registerProduct(name, description)
      return res.status(201).json(product)
    } catch (error: any) {
      console.error(error);
      return res.status(500).json();
    }
  }
}

export default ProductController
