const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');


class Genero extends Model {}

Genero.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nacioEn: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Genero',
    tableName: 'generos'
});


module.exports = Genero;