'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Languages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Languages.init({
    name: DataTypes.STRING,
    released_year: DataTypes.INTEGER,
    github_rank: DataTypes.INTEGER,
    pypl_rank: DataTypes.INTEGER,
    tiobe_rank: DataTypes.INTEGER,
    link: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Languages',
  });
  return Languages;
};