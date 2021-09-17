const { userLogin } = require('../services')
exports.userLogin = async (req, res) => {
    try {
      console.log("reached here")
      const result = await userLogin(req.body);
      if (result.status) {
        res.send({ uuid: result.uuid, token: result.token });
      }
      else {
        console.log(res)
        res.status(404)
        res.send({ message: result.message })
      }
    }
    catch (e) {
      console.log(e);
      res.status(404)
    }
  };