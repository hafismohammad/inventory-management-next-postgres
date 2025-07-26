import pool from "../db/pg-connection";
import { ProductRepository } from "../../core/interfaces/ProductRepository";
import { Product } from "../../core/entities/Product";
import { deleteProduct } from "../../presentation/controllers/productController";

export class PostgresProductRepo implements ProductRepository {
  async findAll(): Promise<Product[]> {
    const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
    return result.rows;
  }

  async findById(id: string): Promise<Product | null> {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);
    return result.rows[0] || null;
  }

  async create(product: Product): Promise<void> {
    await pool.query(
      "INSERT INTO products (name, quantity, price, description) VALUES ($1, $2, $3, $4)",
      [product.name, product.quantity, product.price, product.description]
    );
  }

  async deleteProduct(product_id: string): Promise<void> {
    await pool.query("DELETE FROM products WHERE id = $1", [product_id]);
  }

  async updateProduct(
    product_id: string,
    updatedProductData: Product
  ): Promise<Product> {
    const { name, quantity, price, description } = updatedProductData;

    await pool.query(
      `UPDATE products
     SET name = $1, quantity = $2, price = $3, description = $4
     WHERE id = $5
    `,
      [name, quantity, price, description, product_id]
    );

    const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
    //  console.log('result', result);

    return result.rows[0];
  }
}
