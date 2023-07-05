const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = function() {
  return sequelize.define('province', {
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    province_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    province_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'province',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_province",
        unique: true,
        fields: [
          { name: "province_id" },
        ]
      },
    ]
  });
};
