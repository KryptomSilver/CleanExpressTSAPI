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
      console.error(error)
      return res.status(500)
    }
  }
  public getCtrl = async (req: Request, res: Response) => {
    try {
      const products = await this.productUseCase.fetchAllProducts()
      return res.status(200).json(products)
    } catch (error: any) {
      console.log(error)
      return res.status(500)
    }
  }
  public getByIdCtrl = async (req: Request, res: Response) => {
    try {
      const idProduct = parseInt(req.params.idProduct)
      const product = await this.productUseCase.fetchProductById(idProduct)
      return res.status(200).json(product)
    } catch (error: any) {
      console.log(error)
      return res.status(500)
    }
  }
  public updateCtrl = async (req: Request, res: Response) => {
    try {
      const { name, description } = req.body
      const idProduct = parseInt(req.params.idProduct)
      const productUpdated = await this.productUseCase.modifyProductById(idProduct, {
        name,
        description,
        idProduct: 0
      })
      return res.status(200).json(productUpdated)
    } catch (error: any) {
      console.log(error)
      return res.status(500)
    }
  }
  public deleteCtrl = async (req: Request, res: Response) => {
    try {
      const idProduct = parseInt(req.params.idProduct)
      const deletedProduct = await this.productUseCase.removeProductById(idProduct)
      return res.status(301)
    } catch (error: any) {
      console.log(error)
      return res.status(500)
    }
  }
}

export default ProductController
