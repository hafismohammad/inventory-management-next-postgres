import { Product } from "../entities/Product";

export interface ProductRepository {
  findAll(): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  create(product: Product): Promise<void>;
  deleteProduct(product_id: string):Promise<void>;
  updateProduct(product_id: string, updatedProductData: Product): Promise<Product>;

}
