require('dotenv').config();

//Instancia de la base de datos - Sequelize
const {Sequelize} = require('sequelize');

const {
    DB_HOST,
    DB_USER,
    DB_PASS,
    DB_NAME,
    PORT
} = process.env;

//Conexion a la base de datos
const db = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}:${PORT}/${DB_NAME}`, {
    logging: false,
    native: false,
    define: {
    timestamps: false
  }

});


module.exports = db



