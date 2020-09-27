const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');


class Instrumento extends Model {}

Instrumento.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Instrumento',
    tableName: 'instrumentos'
});

//Instrumento.sync();

module.exports = Instrumento;