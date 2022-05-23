const { DataTypes } = require("sequelize");

const sequelize = require("../db");

  const Cart = sequelize.define("cart", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    date:{
        type: DataTypes.DATE,
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: "pending",
        enum: ["pending", "paid", "cancelled"],
    },
    price_total:{
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    open:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
  },{ timestamps: false });

module.exports = Cart;
