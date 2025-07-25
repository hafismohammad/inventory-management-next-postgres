import { Request, Response } from "express";
import { ProductService } from "../../application/services/ProductService";
import { PostgresProductRepo } from "../../infrastructure/repositories/PostgresProductRepo";

const productService = new ProductService(new PostgresProductRepo());

export const getAllProducts = async (req: Request, res: Response) => {
  console.log('hit controller');
  
  const products = await productService.getAllProducts();
  
  res.json(products);
};

export const createProduct = async (req: Request, res: Response) => {
  const { name, quantity, price, description } = req.body;
    
    // console.log('hit ',  name, quantity, price);

  await productService.addProduct({ name, quantity, price ,description});
  res.status(201).json({ message: "Product added" });
};
