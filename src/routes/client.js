const control = require("../controllers");

module.exports = function(app) {
  app.get("/", control.client.home);
};
