module.exports = function init() {
  const User = require("./models/User.js");
  const Category = require("./models/Category.js");
  const Product = require("./models/Product.js");
  const Detail = require("./models/Detail.js");
  const Cart = require("./models/Cart.js");
  const Review = require("./models/Review.js")
  const Favorites = require("./models/Favorites.js");
  ////relaciones////

  User.belongsToMany(Product, { through: "user_product" });
  Product.belongsToMany(User, { through: "user_product" });

  Product.belongsToMany(Category, { through: "product_category" });
  Category.belongsToMany(Product, { through: "product_category" });

  Product.hasMany(Detail);
  Detail.belongsTo(Product);

  Cart.hasMany(Detail);
  Detail.belongsTo(Cart);

  Detail.hasOne(Review)
  Review.belongsTo(Detail)

  User.hasMany(Cart)
  Cart.belongsTo(User)

  User.hasMany(Cart);
  Cart.belongsTo(User);

  Cart.belongsToMany(Product, { through: "cart_product" });
  Product.belongsToMany(Cart, { through: "cart_product" });

  User.belongsToMany(Product, { through: Favorites });
  Product.belongsToMany(User, { through: Favorites });
};
