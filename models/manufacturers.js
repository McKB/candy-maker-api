const manufacturers = (connection, Sequelize) => {
  return connection.define('manufacturers', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    country: { type: Sequelize.STRING, allowNull: false }
  }, {
    paranoid: true,
    defaultScope: {
      attributes: { exclude: ['updatedAt', 'createdAt', 'deletedAt'] },
    }
  })
}

module.exports = manufacturers

