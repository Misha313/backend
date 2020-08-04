const usersRouter = require('express').Router();

const users = require('../data/user.json');

usersRouter.get('/users', (req, res) => {
  res.send(users);
});

usersRouter.get('/users/:id', (req, res) => {
  const { id } = req.params;

  const arr = [];

  users.forEach((el) => {
    if (id === el._id) { // eslint-disable-line
      arr.push(el);
      res.send(arr);
    }
  });

  if (arr.length === 0) {
    res.status(404);
    res.send({ message: 'Нет пользователя с таким id' });
  }
});

module.exports = usersRouter;
