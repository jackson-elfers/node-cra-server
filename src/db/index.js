const mysql = require("mysql");
const models = require("./models");

var connection = null;

module.exports.connect = function() {
  connection = mysql.createPool({
    connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    debug: false
  });
};

module.exports.query = function(string) {
  return new Promise((resolve, reject) => {
    connection.query(string, function(error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve({ results: results, fields: fields });
      }
    });
  });
};

module.exports.actions = { models: models };
