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
    activityName: {
      type: DataTypes.STRING,
      references: {
        model: 'activity',
        key: 'name'
      }
    }
  },
  {
    timestamps: false,
  }
  );
};
