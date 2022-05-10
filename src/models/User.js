const { DataTypes } = require('sequelize');

const sequelize=require('../db')

const User = sequelize.define('user', {
  id:{
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true
  },
  name:{ 
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_name:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  email:{
    type: DataTypes.STRING,
    allowNull: false,
  }, 
  password:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  dni:{
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  phone_number:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  address:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol:{
    type: DataTypes.ENUM("admin", "user"),
    //sin rol es invitado
  },
  birthday:{
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = User
