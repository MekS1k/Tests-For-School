import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'Victor',
  password: 'Meksikanez616',
  database: 'create-tests'
});
 
export default db;