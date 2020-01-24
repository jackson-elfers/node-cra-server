require("dotenv").config();
const express = require("express");
const db = require("./src/db");
const app = express();

async function main() {
  // connect database
  db.connect();
  try {
    // seed database tables
    await db.actions.models();
  } catch (e) {
    console.log("database: failed to connect...");
    console.log("database: please verify .env credentials.");
    process.exit();
  }
  console.log("database: connected");
  // start server
  app.listen(process.env.PORT, function() {
    require("./src")(app);
    console.log("server: connected");
    console.log("server: listening on port " + process.env.PORT);
  });
}

main().catch(error => {
  console.log(error);
});
