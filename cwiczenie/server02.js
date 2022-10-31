const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/static/index02.html"));
});
app.use(express.static("static"));

let users = [
  { nick: "111", email: "111@w.pl" },
  { nick: "222", email: "222@w.pl" },
  { nick: "333", email: "333@w.pl" },
];
app.post("/addUserHandler", function (req, res) {
  const { nick, email } = { ...req.body };
  console.log(nick, email);
  if (users.find((user) => user.email === email)) {
    res.send("email zaqjęty");
  } else {
    users.push({ nick: nick, email: email });
    res.send("dodano uzytkownikas");
  }
});
app.get("/removeUserBySelect", function (req, res) {
  let string =
    "<form action='/removeUser' method='post'> <select name='userToRemove'>";
  users.forEach((user) => {
    string += `<option value="${user.email}">${user.email}</option>`;
  });
  string += "</select><button type='submit'>Usuń</button></form>";
  res.send(string);
});

app.get("/removeUserByRadio", function (req, res) {
  let string = "<form action='/removeUser' method='post'> ";
  users.forEach((user) => {
    string += `<input type="Radio" name="userToRemove"value="${user.email}">${user.email}</input>`;
  });
  string += "<button type='submit'>Usuń</button></form>";
  res.send(string);
});

app.get("/removeUserByCheckbox", function (req, res) {
  let string = "<form action='/removeUser' method='post'> ";
  users.forEach((user) => {
    string += `<input type="checkbox" name="userToRemove" value="${user.email}">${user.email}</input>`;
  });
  string += "<button type='submit'>Usuń</button></form>";
  res.send(string);
});

app.post("/removeUser", function (req, res) {
  const userToRemove = req.body.userToRemove;
  if (typeof userToRemove == Array) {
  } else {
    const index = users.findIndex(
      (user) => user.email === req.query.userToRemove
    );
    users.splice(index, 1);
  }

  res.sendFile(path.join(__dirname + "/static/index02.html"));
});
app.listen(PORT, function () {
  console.log("start serwera");
});
