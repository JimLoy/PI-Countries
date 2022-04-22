const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('country', {
    id:{
      type:DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: DataTypes.STRING,
    area: DataTypes.FLOAT,
    population: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  }
  );
};
