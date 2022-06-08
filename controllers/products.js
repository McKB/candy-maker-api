const models = require('../models')

const getAllProductsWithManufacturer = async (req, res) => {
  try {
    const products = await models.Products.findAll({
      include: [{ model: models.Manufacturers }]
    })

    return products
      ? res.send(products)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const getProductByNameWithManufacturer = async (req, res) => {
  try {
    const { name } = req.params

    const product = await models.Products.findAll({
      where: { name: { [models.Op.like]: `%${name}%` } },
      include: [{ model: models.Manufacturers }]
    })

    return product
      ? res.send(product)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getAllProductsWithManufacturer, getProductByNameWithManufacturer }

