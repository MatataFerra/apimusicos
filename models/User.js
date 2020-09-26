const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');


class User extends Model {}

User.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pronombre: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
});


module.exports = User;