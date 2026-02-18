'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ProductOption.belongsTo(models.Product, { foreignKey: 'productId' });
    }
  }
  ProductOption.init({
    name: DataTypes.STRING,
    value: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductOption',
  });
  return ProductOption;
};