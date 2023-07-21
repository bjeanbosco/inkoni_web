import { Pool, QueryResult } from 'pg';

interface DbConfig {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
}

const dbConfig: DbConfig = {
    user: 'postgres',
    host: 'localhost',
    database: 'inkoni',
    password: 'Elissa2003?.',
    port: 5432, 
};

const pool = new Pool(dbConfig);

export default pool;

// Add a test query function
export async function testDatabaseConnection() {
  try {
    const client = await pool.connect();
    const queryResult: QueryResult = await client.query('SELECT NOW() as current_time');
    client.release();
    return queryResult.rows[0].current_time;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
}

// Add a function to get data from the database
export async function getData() {
  try {
    const client = await pool.connect();
    const queryResult: QueryResult = await client.query('SELECT * FROM users');
    client.release();
    return queryResult.rows;
  } catch (error) {
    console.error('Error fetching data from the database:', error);
    throw error;
  }
}
