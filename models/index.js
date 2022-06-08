const Sequelize = require('sequelize')
const config = require('../config/sequelize')
const products = require('./products')
const manufacturers = require('./manufacturers')

const environment = process.env.NODE_ENV || 'development'
const { username, password, database, host, dialect } = config[environment] //eslint-disable-line

const connection = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect
})

const Manufacturers = manufacturers(connection, Sequelize)
const Products = products(connection, Sequelize, manufacturers)

Manufacturers.hasMany(Products)
Products.belongsTo(Manufacturers)

module.exports = { Manufacturers, Products, Op: Sequelize.Op }
