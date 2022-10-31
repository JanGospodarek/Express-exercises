const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.static('static'))
const path = require("path")
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/formularz02.html"))
})

app.post("/handleForm", function (req, res) {
    console.log(req.body);
    res.send(`<div id="full" style="background:${req.body.color};width:100%;height:100%;color:white;">${req.body.color}</div>`)
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
