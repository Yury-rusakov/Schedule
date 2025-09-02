//const mariadb = require('mariadb');
import mariadb from 'mariadb';
import { params } from './appcfg.js';
const pool = mariadb.createPool(params.mysql_cfg);

export async function executeQuery(query, params) {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(query, params);
    return result;
  } catch (err) {
    console.error("Ошибка при выполнении запроса:", err);
    throw err;
  } finally {
    if (conn) conn.release();
  }
}
