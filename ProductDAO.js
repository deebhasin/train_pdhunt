const mysql = require("mysql");
const util = require("util");
const connection = mysql.createConnection({
  host: "db-prodhunt.cxwamqo9tkp9.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "11111222%^^",
  database: "pdhunt",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Server!");
});
const query = util.promisify(connection.query).bind(connection);

// let getProductsFromDB = (callback) => {
//   connection.query("SELECT * FROM product", (err, rows, fields) => {
//     if (err) throw err;
//     callback(rows);
//   });
// };

let getProductsFromDB = async (id) => {
  let sqlQuery = "SELECT * FROM product";
  sqlQuery = id ? sqlQuery + " WHERE id = " + id : sqlQuery;

  let result = await query(sqlQuery);
  console.log("products: " + result);
  return result;
};

module.exports = { getProductsFromDB };
