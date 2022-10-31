const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.static('static'))
const path = require("path")


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/formularz.html"))
})

app.get("/handleForm", function (req, res) {
    console.log(req.query);
    if (!req.query.radio || !req.query.checkbox) {
        console.log('brak radio');
        res.send(`<div id="full" style="background:${req.query.color};width:100%;height:100%;color:white;">${req.query.color}</div>`)

    }
    res.send((req.query))
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
