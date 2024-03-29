'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.belongsToMany(models.Event, {
        through: models.Event_Tag,
        as: 'taggedEvents',
      })
      Tag.hasMany(models.Event_Tag)
      Tag.belongsToMany(models.Todo, {
        through: models.Todo_Tag,
        as: 'taggedTodos',
      })
      Tag.hasMany(models.Todo_Tag)
      Tag.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'ownerId',
      })
    }
  }
  Tag.init({
    ownerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};