const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = function() {
  return sequelize.define('order_detail', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'order',
        key: 'order_id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'product_id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_price: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'order_detail',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_order_detail",
        unique: true,
        fields: [
          { name: "order_id" },
          { name: "product_id" },
        ]
      },
    ]
  });
};
