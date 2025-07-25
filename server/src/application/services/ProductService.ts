import { Product } from "../../core/entities/Product";
import { ProductRepository } from "../../core/interfaces/ProductRepository";

export class ProductService {
  constructor(private repo: ProductRepository) {}

  async getAllProducts(): Promise<Product[]> {
    return this.repo.findAll();
  }

  async addProduct(product: Product): Promise<void> {
    return this.repo.create(product);
  }

  async deleteProduct(product_id: string): Promise<void> {
    return this.repo.deleteProduct(product_id)
  }
}
