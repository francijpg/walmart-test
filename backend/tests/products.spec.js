const handlers = require('../controllers/products')
const { 
  mockProductTwo,
  Product,
  setupDatabase
} = require('./fixtures/db');

beforeEach(setupDatabase)

describe('tests', () => {
  describe('products.spec', () => {
    describe('getOneProduct', () => {
      it('Search and return a product', async () => {
        const id = mockProductTwo.id;
        const req = {
          params: {
            id: id
          }
        }
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }
        await handlers.getOneProduct(req, res)
        
        const product = await Product.findOne({ id: req.params.id })
        expect(res.status.mock.calls).toEqual([
          [200]
        ])
        expect(product.id).toEqual(mockProductTwo.id)
      });
      it('Search and return products', async () => {
        const search = mockProductTwo.brand;
        const req = {
          query: {
            search: search
          }
        }
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn()
        }
        await handlers.getProducts(req, res)
        await Product.find({search})
        expect(res.status.mock.calls).toEqual([
          [200]
        ])
      });
    });
  })
})
