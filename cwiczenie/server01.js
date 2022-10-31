const express = require("express");
const app = express();
const PORT = 3000;

const path = require("path");
app.use(express.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  console.log("ścieżka do katalogu głównego aplikacji: " + __dirname);
  res.sendFile(path.join(__dirname + "/static/index01.html"));
  //   console.log(req.query);
  //   let string = "";
  //   for (let index = 0; index < req.query.count; index++) {
  //     string += `<div style="background:${req.query.bg};width:50px;height:50px;">${index}</div>`;
  //   }
  //   console.log(string);
  //   res.send(string);
});
app.post("/handlePost", function (req, res) {
  console.log(req.body);
  const color = req.body.color;
  res.send(
    `<div style='width:100vw;height:100vh;background:${color}'>${color}</div>`
  );
});
app.use(express.static("static"));
app.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
