var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var todoRoutes = require("./routes/todos");

app.get("/", function(req, res) {
  res.send("hello from root route");
});

app.use("/api/todos", todoRoutes);

app.listen(port, function() {
  console.log("app runing on " + port);
});
