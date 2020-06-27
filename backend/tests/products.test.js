const request = require('supertest')
const app = require('../config/express')
const { 
  mockProductOne,
  mockProductTwo,
  setupDatabase,
  Product
} = require('./fixtures/db')

beforeEach(setupDatabase)

describe('tests', () => {
  describe('products.test', () => {
    it('Obtain a product through their id', async () => {
      const id = mockProductTwo.id
      const response = await request(app)
        .get(`/api/products/${id}`)
        .set('content-type','application/json')
      const product = await Product.findOne({ id: id })
      expect(response.statusCode).toEqual(200)
      expect(product).not.toBeNull()
    })
    it('Product is not found by id', async () => {
      const id = 4
      const response = await request(app)
        .get(`/api/products/${id}`)
        .set('content-type','application/json')
      await Product.findOne({ id: id })
      expect(response.statusCode).toEqual(404)
    })
    it('Get products list using a palindrome search', async () => {
      const input = mockProductTwo.brand
      const search = input ?
      {
        $or: [ {
              brand: {
                $regex: input,
                $options: 'i',
              }
            }, {
              description: {
                $regex: input,
                $options: 'i',
              }
            } ]
      } : {}
      const response = await request(app)
        .get(`/api/products/?search=${search}`)
        .set('content-type','application/json')
      const product = await Product.find(search)
      expect(response.statusCode).toEqual(200)
      expect(product).not.toHaveLength(0)
      expect(product).toHaveLength(2)
    })
    it('No products were found matching the input search', async () => {
      const input = "hello"
      const search = input ?
      {
        $or: [ {
              brand: {
                $regex: input,
                $options: 'i',
              }
            }, {
              description: {
                $regex: input,
                $options: 'i',
              }
            } ]
      } : {}
      const response = await request(app)
        .get(`/api/products/?search=${input}`)
        .set('content-type','application/json')
      const product = await Product.find(search)
      expect(response.statusCode).toEqual(404)
      expect(product).toHaveLength(0)
    })
    it('Product exists, but is not returned because it is not a palindrome (business rule)', async () => {
      const input = mockProductOne.brand
      const search = input ?
      {
        $or: [ {
              brand: {
                $regex: input,
                $options: 'i',
              }
            }, {
              description: {
                $regex: input,
                $options: 'i',
              }
            } ]
      } : {}
      const response = await request(app)
        .get(`/api/products/?search=${input}`)
        .set('content-type','application/json')
      const product = await Product.find(search)
      expect(response.statusCode).toEqual(204)
      expect(product).not.toHaveLength(0)
    });
  })
})