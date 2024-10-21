const express = require("express");

const app = express();
const users = require("./users.json");

const port = 4000;

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Добро пожаловать на сервер",
  });
});

app.post("/login", (req, res) => {
  const { login, pass } = req.body;

  const user = users.find((user) => user.login === login && user.pass === pass);

  if (user) {
    res.status(200).json({
      status: true,
      data: user,
    });
  }

  res.status(200).json({
    status: false,
    message: "Пользователь не найден",
  });
});

app.post("/reg", (req, res) => {
  const { name, lastName, age, city, login, pass } = req.body;
  const user = { name, lastName, age, city, login, pass };

  if (!name || !lastName || !age || !city || !login || !pass) {
    return res.status(200).json({
      status: false,
      message: "Все поля обязательны к заполнению",
    });
  }

  if (users.find((user) => user.login === login)) {
    return res.status(200).json({
      status: false,
      message: "Пользователь с таким логином уже существует",
    });
  }

  try {
    users.push(user);
  } catch (error) {
    return res.status(200).json({
      status: false,
      message:
        "Возникла не предвиденная ошибка обратитесь к администратору системы",
    });
  }

  res.status(200).json({
    status: true,
    message: "Пользователь зарегистрирован",
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
