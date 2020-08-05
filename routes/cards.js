const cardsRouter = require('express').Router();

const fsPromises = require('fs').promises;
const path = require('path');

const cardsPath = path.join(__dirname, '../data/cards.json');

cardsRouter.get('/cards', (req, res) => {
  fsPromises.readFile(cardsPath, { encoding: 'utf8' })
    .then((data) => {
      res.send(data);
    })
    .catch(() => {
      res.status(500);
      res.send({ message: 'Внутренняя ошибка сервера' });
    });
});

module.exports = cardsRouter;
