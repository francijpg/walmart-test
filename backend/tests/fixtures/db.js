const { connectDb, mongoose } = require('../../config/mongoose')
const { dbConfig } = require('../../config/config')
const Product = require('../../models/Product')

const mockProductOne = {
  _id: new mongoose.Types.ObjectId(),
  id: 1,
  brand: "ooy eqrceli",
  description: "rlñlw brhrka",
  image: "www.lider.cl/catalogo/images/whiteLineIcon.svg",
  price: 498724
}

const mockProductTwo = {
  _id: new mongoose.Types.ObjectId(),
  id: 2,
  brand: "dsaasd",
  description: "zlrwax bñyrh",
  image: "www.lider.cl/catalogo/images/babyIcon.svg",
  price: 130173
}

const mockProductThree = {
  _id: new mongoose.Types.ObjectId(),
  id: 3,
  brand: "mkbad",
  description: "lsjo dsaasd",
  image: "www.lider.cl/catalogo/images/gamesIcon.svg",
  price: 668961
}

const setupDatabase = async () => {
  await connectDb(dbConfig)
  await Product.deleteMany()
  await new Product(mockProductOne).save()
  await new Product(mockProductTwo).save()
  await new Product(mockProductThree).save()
}

module.exports = {
  mockProductOne,
  mockProductTwo,
  setupDatabase,
  Product
}