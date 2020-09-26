const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');


const UserIns = sequelize.define('UserIns', {
      UserId: { type: DataTypes.INTEGER },
      InstrumentoId: { type: DataTypes.INTEGER }
  },
    {
        tableName: 'users_ins'
    }
  );



module.exports = UserIns;