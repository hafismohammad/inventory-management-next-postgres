import pool from "../config/db";

const createProductsTable = async () => {
  const queryText = `
     CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    quantity INTEGER NOT NULL,      
    price NUMERIC(10, 2) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
    `;

  try {
    await pool.query(queryText);
    console.log("Products table created or already exists");
  } catch (error) {
    console.log("Error creating products table", error);
  }
};


export default createProductsTable