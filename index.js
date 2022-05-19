const app = require("./src/app.js");
const sequelize = require("./src/db.js");
const init = require('./src/init.js')

init()

app.listen(3001, () => {
  sequelize
    .sync({ force: false })
    .then(console.log("Conectado a la base de datos"))
    .then(console.log('Listening at 3001'))
    .catch((e) => console.log(e));
});