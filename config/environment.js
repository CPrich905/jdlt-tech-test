const PORT = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/products'

module.exports = { 
  port: PORT, 
  dbURI: dbURI 
}
