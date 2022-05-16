const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Detail = sequelize.define("detail", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  bundle: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Detail;
