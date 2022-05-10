const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Images = sequelize.define("image", {
  img: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Images;
