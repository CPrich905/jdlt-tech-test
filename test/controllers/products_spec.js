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
describe('POST /api/products', () => {
  it('should return a 201 response', done => {
    api
      .post('/api/products')
      .set('Accept', 'application/json')
      .send({
        supplier: 'Another Supplier',
        product: 'moderate sized wongle',
        price: 10
      })
      .expect(201, done)
    })
    it('should create a new product', done => {
      api
        .post('/api/products')
        .set('Accept', 'application/json')
        .send({
          supplier: 'Another Supplier',
          product: 'moderate sized wongle',
          price: 10
        })
        .end((err, res) => {
          const product = res.body

          expect(product)
            .to.have.property('_id')
            .and.to.be.a('string')
          expect(product)
            .to.have.property('supplier')
            .and.to.be.a('string')
          expect(product)
            .to.have.property('product')
            .and.to.be.a('string')
          expect(product)
            .to.have.property('price')
            .and.to.be.a('number')

          done()
      })
    })
  })

describe('GET api/products/:id', () => {
  let product
  beforeEach(done => {
    Product.create({
      supplier: 'Test supplier',
      product: 'Test product',
      price: 4
    })
    .then(productData => {
      product = productData
      done()
    })
    .catch(done)
  })
  it('should return a 200 response', done => {
    api
    .get(`/api/products/${product.id}`)
    .set('Accept', 'application/json')
    .expect(200, done)
  })
})

describe('DELETE route', () => {
  beforeEach(done => {
    Product.create({
      supplier: 'Test supplier',
      product: 'Test product',
      price: 4
    })
    .then(productData => {
      product = productData
      done()
    })
    .catch(done)
  })
  it('should return a 204 response', done => {
    api
      .delete(`/api/products/${product.id}`)
      .set('Accept', 'application/json')
      .expect(204, done)
  })
})
})