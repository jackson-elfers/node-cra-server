const control = require("../controllers");

module.exports = function(app) {
  app.get("/", control.client.home);
  app.get("*", control.client.home);
};
