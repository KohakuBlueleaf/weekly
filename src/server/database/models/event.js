'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsToMany(models.Tag, {
        through: models.Event_Tag,
        as: 'tags',
      })
      Event.hasMany(models.Event_Tag)
      Event.belongsTo(models.User, {
        as: 'owner',
        foreignKey: 'ownerId',
      })
    }
  }
  Event.init({
    ownerId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    weekday: DataTypes.INTEGER,
    timeStart: DataTypes.INTEGER,
    timeEnd: DataTypes.INTEGER,
    location: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};