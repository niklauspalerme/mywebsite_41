const mysql = require('mysql2/promise');
 
exports.getAllStudents = async function getAllStudents() {
  // Establece la conexión con la DB
  const con = await mysql.createConnection({
    host: "database-nico.cg0jayjngesd.us-east-2.rds.amazonaws.com",
    user: "admin_root",
    password: process.env.DB_PASS,
    database: "RDS_EXAMPLE"
  });
 
  // Query/Consulta para traer TODOS los estudiantes
  const query = "SELECT * FROM Students";
  const [results,] = await con.execute(query, null);
 
  return results;
}



//password: process.env.DB_PASS,