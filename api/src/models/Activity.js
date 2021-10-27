const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('activity', {
    name: DataTypes.STRING,
    difficulty: DataTypes.ENUM('1','2','3','4','5'),
    duration: DataTypes.INTEGER,
    season: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
  },
  {
    timestamps: false,
  }
  );
};
