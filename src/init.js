module.exports = function init() {


  const User = require("./models/User.js");
  const Category = require("./models/Category.js");
  const Product = require("./models/Product.js");

  ////relaciones////


  User.belongsToMany(Product, { through: "user_product" })
  Product.belongsToMany(User, { through: "user_product" })

  Product.belongsToMany(Category, { through: "product_category" })
  Category.belongsToMany(Product, { through: "product_category" })


}