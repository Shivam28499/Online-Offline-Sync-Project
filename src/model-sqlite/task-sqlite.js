'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sqlite-config');

class TaskSQLite extends Model {}

TaskSQLite.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  synced : {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
}, {
  sequelize, 
  modelName: 'TaskSQLite'
});

module.exports = TaskSQLite;
