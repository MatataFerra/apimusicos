const sequelize = require('./database');
const User = require('./models/User');
const Instrumento = require('./models/Instrumento');
const Genero = require('./models/Genero');
const UserIns = require('./models/users_ins');
const UserGen = require('./models/users_genero');

(async () => {
    await User.sync();
    await Instrumento.sync();
    await Genero.sync();
    await UserIns.sync();
    await UserGen.sync();
    //await sequelize.sync({ force: true });
})();