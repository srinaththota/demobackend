const Sequelize = require('sequelize');
const config = require('../config').database;
const fs = require("fs");
const path = require("path");
const withCURDoperation = require('../lib/common');
var sequelize = new Sequelize(
    config.name,
    config.username,
    config.password,
    config.options
)
var db = {}
fs.readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(__dirname, file));
        const options = { primaryKeyField : 'id'};
        withCURDoperation(options)(model);
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if(db[modelName].associate){
        db[modelName].associate(db);
    }
    
});
sequelize.authenticate()
    .then(()=> {
        console.log('Connection has been established successfully to Admin Database.');
    })
    .catch( err => {
        console.log('Unable to connect to Admin Database:', err);
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
