import pool from "../db/pg-connection";
import { ProductRepository } from "../../core/interfaces/ProductRepository";
import { Product } from "../../core/entities/Product";

export class PostgresProductRepo implements ProductRepository {
  async findAll(): Promise<Product[]> {
    const result = await pool.query("SELECT * FROM products");
    return result.rows;
  }

  async findById(id: string): Promise<Product | null> {
    const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
    return result.rows[0] || null;
  }

  async create(product: Product): Promise<void> {
    await pool.query(
  "INSERT INTO products (name, quantity, price, description) VALUES ($1, $2, $3, $4)",
  [product.name, product.quantity, product.price, product.description]
);

  }
}
