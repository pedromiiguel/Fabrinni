const { Router } = require('express');
const User = require('./models/User');

const routes = Router();

routes.post('/users', async (req, res) => {
  const { name, cpf, birthDate, sex, telephone } = req.body;

  const user = await User.create({
    name,
    cpf,
    birthDate,
    sex,
    telephone,
  });
  console.log(user);
  return res.json(user);
});

module.exports = routes;
