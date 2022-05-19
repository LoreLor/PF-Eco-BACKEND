const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Detail = sequelize.define("detail", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  bundle: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  img:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price_total:{
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Detail;
