const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.static('static'))
const path = require("path")

let users = [
    { nick: "111", email: "111@w.pl" },
    { nick: "222", email: "222@w.pl" },
    { nick: "333", email: "333@w.pl" }
]

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/static/addUser.html"))
})

app.get("/addUserHandler", function (req, res) {
    const { nick, email } = { ...req.query }
    const isSet = users.find(user => user.email === email)
    if (isSet) {
        res.send(`Email ${email} jest zajęty!`)
    } else {
        users.push({ nick: nick, email: email })
        res.send(`Dodano użytkownika ${nick}!`)

    }
})

app.get("/removeUserBySelect", function (req, res) {
    let string = "<form action='/removeUser'> <select name='userToRemove'>"
    users.forEach((user) => {
        string += `<option value="${user.email}">${user.email}</option>`
    })
    string += "</select><button type='submit'>Usuń</button></form>"
    res.send(string)
})

app.get("/removeUserByRadio", function (req, res) {
    let string = "<form action='/removeUser'> "
    users.forEach((user) => {
        string += `<input type="Radio" name="userToRemove"value="${user.email}">${user.email}</input>`
    })
    string += "<button type='submit'>Usuń</button></form>"
    res.send(string)
})

app.get("/removeUserByCheckbox", function (req, res) {
    let string = "<form action='/removeUser'> "
    users.forEach((user) => {
        string += `<input type="checkbox" name="userToRemove" value="${user.email}">${user.email}</input>`
    })
    string += "<button type='submit'>Usuń</button></form>"
    res.send(string)
})

app.get("/removeUser", function (req, res) {
    const userToRemove = re
    if (typeof )//dla arraya loopujemy po removavh
        const index = users.findIndex(user => user.email === req.query.userToRemove)
    users.splice(index, 1)
    res.sendFile(path.join(path.join(__dirname + "/static/addUser.html")))

})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})
