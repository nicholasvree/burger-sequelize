module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    burger_name: {
      type: DataTypes.STRING
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0 
    }
  }, {
    timestamps: false
  });

  return Burger;
};


