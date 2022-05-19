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
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.ENUM("Active", "Inactive"),
    allowNull: false,
  }
});

module.exports = Product;