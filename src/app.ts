require("dotenv").config();
const express = require("express");
const app = express();

app.listen(process.env.PORT, function() {
  require("./index")(app);
  console.log("active port: " + process.env.PORT);
});
