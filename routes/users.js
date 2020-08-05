const usersRouter = require('express').Router();

const fsPromises = require('fs').promises;
const path = require('path');

const usersPath = path.join(__dirname, '../data/user.json');

usersRouter.get('/users/:id', (req, res) => {
  fsPromises.readFile(usersPath, { encoding: 'utf8' })
    .then((data) => {
      const users = JSON.parse(data);
      const { id } = req.params;
      // eslint-disable-next-line no-underscore-dangle
      const user = users.filter((item) => item._id === id);
      if (user.length === 0) {
        res.status(404);
        res.send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user[0]);
    });
});

usersRouter.get('/users', (req, res) => {
  fsPromises.readFile(usersPath, { encoding: 'utf8' })
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500);
      res.send({ message: 'Внутренняя ошибка сервера' });
    });
});

module.exports = usersRouter;
