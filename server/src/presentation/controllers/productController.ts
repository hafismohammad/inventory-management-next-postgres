import { Request, Response } from "express";
import { ProductService } from "../../application/services/ProductService";
import { PostgresProductRepo } from "../../infrastructure/repositories/PostgresProductRepo";

const productService = new ProductService(new PostgresProductRepo());

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch products", error });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, quantity, price, description } = req.body;
    await productService.addProduct({ name, quantity, price, description });
    res.status(201).json({ message: "Product added" });
  } catch (error) {
    res.status(500).json({ message: "Failed to add product", error });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product_id = req.params.product_id;
    await productService.deleteProduct(product_id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { product_id, updatedProduct } = req.body;
    // console.log('controller hit', product_id, updatedProduct);
    await productService.updateProduct(product_id, updatedProduct);

    res.status(200).json({ message: "Product updated" });
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error });
  }
};
