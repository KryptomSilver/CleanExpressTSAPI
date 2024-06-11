import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: `${process.env.DB_HOST}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_NAME}`,
});

export const checkDBMySQL = async () => {
  try {
    await pool.query("SELECT 1");
    console.log("DB is connected");
  } catch (error: any) {
    console.warn(error);
  }
};
