const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');


const UserGen = sequelize.define('UserGen', {
      UserId: { type: DataTypes.INTEGER },
      GeneroId: { type: DataTypes.INTEGER }
  },
    {
        tableName: 'users_gen'
    }
  );



module.exports = UserGen;