var DataTypes = require("sequelize").DataTypes;
var _address = require("./address");
var _brand = require("./brand");
var _cart = require("./cart");
var _category = require("./category");
var _district = require("./district");
var _feedback = require("./feedback");
var _order = require("./order");
var _order_detail = require("./order_detail");
var _order_status = require("./order_status");
var _permission = require("./permission");
var _poster = require("./poster");
var _product = require("./product");
var _province = require("./province");
var _users = require("./users");
var _ward = require("./ward");

function initModels(sequelize) {
  var address = _address(sequelize, DataTypes);
  var brand = _brand(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var district = _district(sequelize, DataTypes);
  var feedback = _feedback(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var order_detail = _order_detail(sequelize, DataTypes);
  var order_status = _order_status(sequelize, DataTypes);
  var permission = _permission(sequelize, DataTypes);
  var poster = _poster(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var province = _province(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var ward = _ward(sequelize, DataTypes);

  order.belongsToMany(product, { as: 'product_id_product_order_details', through: order_detail, foreignKey: "order_id", otherKey: "product_id" });
  product.belongsToMany(order, { as: 'order_id_orders', through: order_detail, foreignKey: "product_id", otherKey: "order_id" });
  product.belongsToMany(users, { as: 'user_id_users', through: cart, foreignKey: "product_id", otherKey: "user_id" });
  product.belongsToMany(users, { as: 'user_id_users_feedbacks', through: feedback, foreignKey: "product_id", otherKey: "user_id" });
  users.belongsToMany(product, { as: 'product_id_products', through: cart, foreignKey: "user_id", otherKey: "product_id" });
  users.belongsToMany(product, { as: 'product_id_product_feedbacks', through: feedback, foreignKey: "user_id", otherKey: "product_id" });
  users.belongsTo(address, { as: "address", foreignKey: "address_id"});
  address.hasMany(users, { as: "users", foreignKey: "address_id"});
  product.belongsTo(brand, { as: "brand", foreignKey: "brand_id"});
  brand.hasMany(product, { as: "products", foreignKey: "brand_id"});
  product.belongsTo(category, { as: "category", foreignKey: "category_id"});
  category.hasMany(product, { as: "products", foreignKey: "category_id"});
  ward.belongsTo(district, { as: "district", foreignKey: "district_id"});
  district.hasMany(ward, { as: "wards", foreignKey: "district_id"});
  order_detail.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(order_detail, { as: "order_details", foreignKey: "order_id"});
  order.belongsTo(order_status, { as: "status", foreignKey: "status_id"});
  order_status.hasMany(order, { as: "orders", foreignKey: "status_id"});
  users.belongsTo(permission, { as: "permission", foreignKey: "permission_id"});
  permission.hasMany(users, { as: "users", foreignKey: "permission_id"});
  cart.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(cart, { as: "carts", foreignKey: "product_id"});
  feedback.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(feedback, { as: "feedbacks", foreignKey: "product_id"});
  order_detail.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(order_detail, { as: "order_details", foreignKey: "product_id"});
  district.belongsTo(province, { as: "province", foreignKey: "province_id"});
  province.hasMany(district, { as: "districts", foreignKey: "province_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  feedback.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(feedback, { as: "feedbacks", foreignKey: "user_id"});
  order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order, { as: "orders", foreignKey: "user_id"});
  address.belongsTo(ward, { as: "ward", foreignKey: "ward_id"});
  ward.hasMany(address, { as: "addresses", foreignKey: "ward_id"});

  return {
    address,
    brand,
    cart,
    category,
    district,
    feedback,
    order,
    order_detail,
    order_status,
    permission,
    poster,
    product,
    province,
    users,
    ward,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
