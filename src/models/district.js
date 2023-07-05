const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = function() {
  return sequelize.define('district', {
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    district_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    district_prefix: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    province_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'province',
        key: 'province_id'
      }
    }
  }, {
    sequelize,
    tableName: 'district',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_district",
        unique: true,
        fields: [
          { name: "district_id" },
        ]
      },
    ]
  });
};
