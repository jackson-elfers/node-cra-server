const express = require("express");
const path = require("path");
const secure = require("express-force-https");

module.exports = function(app) {
  app.use(secure);
  app.use(express.static(path.join(process.cwd(), "./client/build")));
};
