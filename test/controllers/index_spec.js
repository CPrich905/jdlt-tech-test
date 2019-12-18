require('../spec_helper')
const Product = require('../../models/product')

describe('Product tests', () => {
  beforeEach(done => {
    Product.collection.deleteMany()
    done()
  })
  afterEach(done => {
    Product.collection.deleteMany()
    done()
  })

  describe('GET /api/products', () => {
    beforeEach(done => {
      Product.create({
        supplier: 'Test supplier',
        product: 'Test product',
        price: 4
      })
      .then(() => done())
      .catch(done)
    })
    it('should return 200 response', done => {
      api
        .get('/api/products')
        .set('Accept', 'application/json')
        .expect(200, done)
    })
    it('should return an array', done => {
      api.get('/api/products')
        .end((err, res) => {
          expect(res.body[0]).to.be.an('object')
          done()
        })
    })
    it('should return correct data', done => {
      api.get('/api/products')
        .end((err, res) => {
          expect(res.body[0]._id).to.exist
          expect(res.body[0].supplier).to.eq('Test supplier')
          expect(res.body[0].product).to.eq('Test product')
          expect(res.body[0].price).to.eq(4)
          done()
        })
    })
  })
})