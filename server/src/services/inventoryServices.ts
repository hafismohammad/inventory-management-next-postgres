import pool from "../config/db"
import { CreateInventoryRequest } from "../interfaces/inventory"


export default class InventoryService {

  async createInventory(data: CreateInventoryRequest) {
  const { name, price, quantity, description } = data;
console.log('name, quantity, price, description',name, quantity, price, description);

    const savedInventory = await pool.query(
      'INSERT INTO products (name, price, quantity, description) VALUES ($1, $2, $3, $4) RETURNING *',
       [name, price, quantity, description]
    )
    console.log('saved inventory', savedInventory);
    
     return savedInventory.rows[0]
  }
  
}
