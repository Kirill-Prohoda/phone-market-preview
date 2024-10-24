const express = require("express");

const app = express();
const users = require("./users.json");
const cors = require ("cors");

app.use(cors());

const bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

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
  const {  lastName, age, city, login, pass } = req.body;
  const user = { lastName, age, city, login, pass };


if (user.age === '' || user.login === '' || user.pass === '') {
  return res.status(200).json({
    status: false,
    message: "Заполните поля",
  });
}



if (user.age === '' || user.login === '' || user.pass === '') {
  return res.status(200).json({
    status: false,
    message: "Заполните поля",
  });
}



if (user.age === '' || user.login === '' || user.pass === '') {
  return res.status(200).json({
    status: false,
    message: "Заполните поля",
  });
}



if (user.age === '' || user.login === '' || user.pass === '') {
  return res.status(200).json({
    status: false,
    message: "Заполните поля",
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
