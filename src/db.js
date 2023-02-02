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
const db = new Sequelize('postgresql://urdrgpete9u19skx6aop:LnfsWAU3h8oTVKFfketpcoWGziUifJ@bjdtrt4wou8niwngze6s-postgresql.services.clever-cloud.com:5432/bjdtrt4wou8niwngze6s', {
    logging: false,
    native: false,
    define: {
    timestamps: false
  }

});


module.exports = db



