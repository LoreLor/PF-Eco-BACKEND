const { DataTypes } = require("sequelize");

const sequelize = require("../db");

const Favorites = sequelize.define("favorites", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
});

module.exports = Favorites;