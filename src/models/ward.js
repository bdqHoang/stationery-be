const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = function() {
  return sequelize.define('ward', {
    ward_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ward_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ward_prefix: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'district',
        key: 'district_id'
      }
    }
  }, {
    sequelize,
    tableName: 'ward',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ward",
        unique: true,
        fields: [
          { name: "ward_id" },
        ]
      },
    ]
  });
};
