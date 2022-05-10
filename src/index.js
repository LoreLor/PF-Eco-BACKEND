const app = require("./app");
const sequelize = require("./db");
const init = require('./init.js')

init()

app.listen(3001, () => {
  sequelize
    .sync({ force: true })

    .then(console.log("Conectado a la base de datos"))
    .then(console.log('Listening at 3001'))
    .catch((e) => console.log(e));
});
