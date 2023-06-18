'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsToMany(models.Tag, {
        through: models.Todo_Tag,
        as: 'tags',
      })
      Todo.hasMany(models.Todo_Tag)
      Todo.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'ownerId',
      })
    }
  }
  Todo.init({
    content: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    weekday: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};