const routes = require('express').Router();
const { userLogin, ProdcutsList } = require('../controllers')
routes.get('/', (req, res) => {
    res.status(200).json({message: 'This is a centralized auth system for synthesis Applications!'});
  });
routes.post('/login', userLogin);
routes.get('/products',ProdcutsList)

module.exports = routes;