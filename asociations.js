const User = require('./models/User');
const Instrumento = require('./models/Instrumento');
const Genero = require('./models/Genero');

// Many to Many

// User e Instrumento
User.belongsToMany(Instrumento, { through: "users_ins" });
Instrumento.belongsToMany(User, { through: "users_ins" });

// User y Genero
User.belongsToMany(Genero, { through: "users_gen" });
Genero.belongsToMany(User, { through: "users_gen" });