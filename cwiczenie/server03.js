const express = require("express");
const app = express();
const port = 3000;

const path = require("path");
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/static/index03.html"));
});
app.post("/postHandle", function (req, res) {
  const data = req.body;
  console.log(req.body);

  const exitData = {
    X: data.X,
    Y: data.Y,
  };
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(exitData, null, 5));
});
app.use(express.static("static"));
app.listen(port, () => {
  console.log("start");
});
