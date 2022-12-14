const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.urlencoded({
    extended: true
}));

const path = require("path")

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/index01.html"))
})

app.post("/handlePost", function (req, res) {
    res.setHeader("Content-Type", "application/json")
    const data = req.body;
    const exitData = {
        ...data,
        suma: Number(data.numer1) + Number(data.numer2),
        iloczyn: Number(data.numer1) * Number(data.numer2)
    }
    res.send(JSON.stringify(exitData, null, 5));
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})