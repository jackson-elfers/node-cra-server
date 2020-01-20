require("dotenv").config();
const express = require("express");
const db = require("./src/db");
const app = express();

async function main() {
  // connect database
  db.connect();
  console.log("database: connected");
  // seed database tables
  await db.actions.models();
  // start server
  app.listen(process.env.PORT, function() {
    require("./src")(app);
    console.log("server: connected");
    console.log("port: " + process.env.PORT);
  });
}

main().catch(error => {
  console.log(error);
});
