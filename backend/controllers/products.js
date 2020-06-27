const Product = require('../models/Product')
const { fiftyPercentDiscount } = require('./../util')
const path = require("path");

const handlers = {}

handlers.getOneProduct = async (req, res) => {
    const product = await Product.findOne({ id: req.params.id })
    if(product){
      const evaluatedProduct = fiftyPercentDiscount(product)
      res.status(200).send(evaluatedProduct)   
    } else {
      res.status(404).send(path.join(__dirname, "public", "index.html"))
      // res.status(404).send({ message: 'Product not found.' })
    }
},
handlers.getProducts = async (req, res) => {
    const search = req.query.search ? 
    { 
      $or: [ {
            brand: {
              $regex: req.query.search,
              $options: 'i',
            }
          }, {
            description: {
              $regex: req.query.search,
              $options: 'i',
            }
          } ]
    } : {};
    const product = await Product.find(search)
    
    if(product.length >= 1){
      const evaluatedProduct = fiftyPercentDiscount(product)
      evaluatedProduct.length >= 1 ? res.status(200).send(evaluatedProduct) : res.sendStatus(204)
    } else {
      res.status(404).send(path.join(__dirname, "public", "index.html"))
      //.send({ message: 'Product not found.' })
    }
}

module.exports = handlers