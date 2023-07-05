const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
module.exports = function() {
  return sequelize.define('order_status', {
    status_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order_status',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_status",
        unique: true,
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
};
