const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('image', {
    image_id: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      primaryKey: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    order_of_appearance: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product',
        key: 'product_id'
      }
    }
  }, {
    sequelize,
    tableName: 'image',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_image",
        fields: [
          { name: "image_id" },
        ]
      },
      {
        name: "PK_image",
        unique: true,
        fields: [
          { name: "image_id" },
        ]
      },
    ]
  });
};
