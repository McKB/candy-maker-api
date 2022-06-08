const models = require('../models')

const getAllManufacturersWithProducts = async (req, res) => {
  try {
    const manufacturers = await models.Manufacturers.findAll({
      include: [{ model: models.Products }]
    })

    return manufacturers
      ? res.send(manufacturers)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

const getManufacturerByNameWithProducts = async (req, res) => {
  try {
    const { name } = req.params

    const manufacturer = await models.Manufacturers.findAll({
      where: {
        name: { [models.Op.like]: `%${name}%` }
      },
      include: [{ model: models.Products }]
    })

    return manufacturer
      ? res.send(manufacturer)
      : res.sendStatus(404)
  } catch (error) {
    return res.sendStatus(500)
  }
}

module.exports = { getAllManufacturersWithProducts, getManufacturerByNameWithProducts }
