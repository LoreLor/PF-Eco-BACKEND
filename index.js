const app = require("./src/app");
const sequelize = require("./src/db");
const init = require('./src/init')

init()

app.listen(3001, () => {
  sequelize
    .sync({ force: true })
    .then(console.log("Conectado a la base de datos"))
    .then(console.log('Listening at 3001'))
    .catch((e) => console.log(e));
});