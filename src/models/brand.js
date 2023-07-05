const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = function() {
  return sequelize.define('brand', {
    brand_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'brand',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_brand",
        unique: true,
        fields: [
          { name: "brand_id" },
        ]
      },
    ]
  });
};
