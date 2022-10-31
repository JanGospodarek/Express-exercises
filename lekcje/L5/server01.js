const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

const path = require("path")

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index.html"))
})

app.post("/handlePost", function (req, res) {
    console.log(req.body)
    res.setHeader("content-type", "text/plain")
    res.send(req.body)

})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})