const path = require("path");

function home(req, res) {
  res.sendFile(path.join(process.cwd(), "./client/build/index.html"));
}

module.exports = function(app) {
  app.get("/", home);
  app.get("*", home);
};
