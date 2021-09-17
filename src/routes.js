const model = require('./models');
const routes = require('express').Router();
const userLogin=require('./controllers/authentication').userLogin
console.log("reached")
routes.get('/', (req, res) => {
    res.status(200).json({ message: 'This is Admin Microservice!' });
});
routes.post('/login', (req, res) => {
    userLogin(req,res)
});

module.exports=routes;