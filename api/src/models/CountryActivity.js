const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('countryActivity', {
    countryId: {
      type: DataTypes.STRING(3),
      references: {
        model: 'country',
        key: 'id'
      }
    },
    activityId: {
      type: DataTypes.STRING,
      references: {
        model: 'activity',
        key: 'id'
      }
    }
  },
  {
    timestamps: false,
  }
  );
};
