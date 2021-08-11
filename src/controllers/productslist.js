const { ProductsList } = require('../services')
exports.ProdcutsList = async (req, res) => {
    try {
      const result = await ProductsList();
      if (result.status) {
        res.send({productsList: result.products });
      }
      else {
        res.send({ message: result.message })
      }
    }
    catch (e) {
      console.log(e);
      
    }
  };