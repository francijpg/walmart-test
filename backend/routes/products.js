const express = require('express')
const { products } = require('../controllers')
const { validProducts } = require('./../middlewares')

const router = express.Router()

router.get('/:id', validProducts.parameterId, products.getOneProduct)
router.get('/', validProducts.parameterName, products.getProducts)

module.exports = router