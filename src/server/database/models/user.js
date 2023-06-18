'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Event, {
        as: 'events',
        foreignKey: 'ownerId'
      });
      User.hasMany(models.Tag, {
        as: 'tags',
        foreignKey: 'ownerId'
      })
    }
  }
  User.init({
    uid: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    memo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};