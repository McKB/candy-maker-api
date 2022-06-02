const Sequelize = require('sequelize')
const products = require('./products')
const manufacturers = require('./manufacturers')

const connection = new Sequelize('candies', 'candies', 'C4nd13$!', {
  host: 'localhost',
  dialect: 'mysql'
})

const Manufacturers = manufacturers(connection, Sequelize)
const Products = products(connection, Sequelize, manufacturers)

Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = { Manufacturers, Products }
