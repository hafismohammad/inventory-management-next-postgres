import pool from './db'; // Replace with your actual file name

// Test the connection
async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL successfully!');
    
    // Test query
    const result = await client.query('SELECT NOW()');
    console.log('Current time from database:', result.rows[0].now);
    
    client.release(); // Return client to pool
  } catch (err) {
    console.error('Database connection error:', err);
  }
}

testConnection();