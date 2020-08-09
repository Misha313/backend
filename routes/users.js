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
      const user = users.find((item) => item._id === id);
      res.send(user);
    })
    .catch(() => {
      res.status(500).send({ message: 'Внутренняя ошибка сервера' });
    });
});

usersRouter.get('/users', (req, res) => {
  fsPromises.readFile(usersPath, { encoding: 'utf8' })
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500).send({ message: 'Внутренняя ошибка сервера' });
    });
});

module.exports = usersRouter;
