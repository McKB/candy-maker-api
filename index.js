const express = require('express')
const app = express()
const { getAllProductsWithManufacturer, getProductByNameWithManufacturer } = require('./controllers/products')
const { getAllManufacturersWithProducts, getManufacturerByNameWithProducts } = require('./controllers/manufacturers')

app.get('/products', getAllProductsWithManufacturer)
app.get('/manufacturers', getAllManufacturersWithProducts)
app.get('/products/:name', getProductByNameWithManufacturer)
app.get('/manufacturers/:name', getManufacturerByNameWithProducts)

app.listen(1337, () => {
  console.log('listening at http://localhost:1337...') // eslint-disable-line no-console
})
