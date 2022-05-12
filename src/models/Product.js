const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Product = sequelize.define("product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isActive:{
    type: DataTypes.ENUM("Activo","Inactivo"),
    allowNull: false,
  },
  stock:{
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{ timestamps: false });

module.exports = Product;
