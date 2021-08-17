const model = require('../models');

const getUsers = async (req, res) => {
    try {
        let response = {};
        ////////// Get All Users //////
        const Users = await model.User.findAll();

        res.status(200).json(Users);


    } catch (error) {
        console.log(error)

    }
}

module.exports={
    getUsers
}