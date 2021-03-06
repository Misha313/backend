const express = require('express');
const usersRouter = require('./routes/users.js');

const cardsRouter = require('./routes/cards.js');

const { PORT = 3000 } = process.env;
const app = express();

app.use('/', usersRouter);
app.use('/', cardsRouter);

app.use(express.static(`${__dirname}/public`));

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); // eslint-disable-line
});
