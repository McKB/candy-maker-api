const express = require('express')
const app = express()
const { getAllProductsWithManufacturer, getProductByIdWithManufacturer } = require('./controllers/products')
const { getAllManufacturersWithProducts, getManufacturerByIdWithProducts } = require('./controllers/manufacturers')

app.get('/products', getAllProductsWithManufacturer)
app.get('/manufacturers', getAllManufacturersWithProducts)
app.get('/products/:id', getProductByIdWithManufacturer)
app.get('/manufacturers/:id', getManufacturerByIdWithProducts)

app.listen(1337, () => {
  console.log('listening at http://localhost:1337...') // eslint-disable-line no-console
})
