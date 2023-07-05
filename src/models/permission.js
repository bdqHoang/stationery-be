const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = function() {
  return sequelize.define('permission', {
    permission_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'permission',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_permission",
        unique: true,
        fields: [
          { name: "permission_id" },
        ]
      },
    ]
  });
};
