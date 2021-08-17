const model = require('./models');
const routes = require('express').Router();
routes.get('/', (req, res) => {
    res.status(200).json({ message: 'This is Admin Microservice!' });
});


module.exports=routes;