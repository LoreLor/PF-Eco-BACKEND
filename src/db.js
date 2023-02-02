require('dotenv').config();

//Instancia de la base de datos - Sequelize
const {Sequelize} = require('sequelize');

// const {
//     DB_HOST,
//     DB_USER,
//     DB_PASS,
//     DB_NAME
// } = process.env;

//Conexion a la base de datos
// const db = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}`, {
//     logging: false,

//     native: false,
//     define: {
//     timestamps: false
//   }

// });
const db = new Sequelize(process.env.DATABASE_URL)

module.exports = db



