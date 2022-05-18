const { DataTypes } = require("sequelize");

const sequelize = require("../db");

  const Cart = sequelize.define("cart", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    payment_method:{
        type: DataTypes.STRING,
        enum: ["cash", "credit", "debit"],
        defaultValue: "cash"
    },
    date:{
        type: DataTypes.DATE,
    },
    status:{
        type: DataTypes.STRING,
        defaultValue: "pending",
        enum: ["pending", "paid", "cancelled"],
    },
    open:{
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
  },{ timestamps: false });

module.exports = Cart;
