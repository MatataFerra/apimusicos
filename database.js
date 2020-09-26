const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



(async () => {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos Sqlite');
})();

module.exports = sequelize;