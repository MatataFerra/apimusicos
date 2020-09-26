// Dependencias
require('./database');

// Express
const express = require('express');
const app = express();
// BodyParser
const bodyParser = require('body-parser');
// DotEnv
require('dotenv/config');
// Puerto 3000
const port = process.env.PORT;
// Cors
const cors = require('cors');
// Routes
const UsersRoute = require('./routes/users');
const InstrumentosRoute = require('./routes/instrumentos');
const GeneroRoute = require('./routes/generos');

// Syncs (despues de rutas)
require('./asociations');
require('./migrations');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/users', UsersRoute);
app.use('/instrumentos', InstrumentosRoute);
app.use('/generos', GeneroRoute);

app.get('/', (req,res) => {
    res.send("Hola");
})

// Listen 
app.listen(port, () => {
    console.log(`Conectado a puerto ${port}`);
});


// Creando data

(async ()=>{
    const User = require('./models/User');
    const Instrumento = require('./models/Instrumento');
    const Genero = require('./models/Genero');

    // Usuarios
    const usuarioPedro = await User.create({
        nombre: "Pedro Provenzano",
        pronombre: "el"
    });
    const usuarioMatias = await User.create({
        nombre: "Matias Ferra",
        pronombre: "el"
    });
    
    // Instrumentos
    const guitarra = await Instrumento.create({
        nombre: "Guitarra",
        tipo: "Cuerdas"
    });

    const bajo = await Instrumento.create({
        nombre: "Bajo",
        tipo: "Cuerdas"
    });

    const saxofonAlto = await Instrumento.create({
        nombre: "Saxofon Alto",
        tipo: "Viento madera"
    });

    // Generos
    const punk = await Genero.create({
        nombre: "Punk",
        nacioEn: 1970
    });
    const reggae = await Genero.create({
        nombre: "Reggae",
        nacioEn: 1960
    });
    const heavyMetal = await Genero.create({
        nombre: "Heavy Metal",
        nacioEn: 1969
    });

    // Relaciones
    // Usuarios - Instrumentos
    await usuarioPedro.addInstrumentos([guitarra, bajo]);
    await usuarioMatias.addInstrumentos([bajo, saxofonAlto]);
    // Usuarios - Generos
    await usuarioPedro.addGeneros([heavyMetal, reggae]);
    await usuarioMatias.addGeneros([punk, heavyMetal]);
})();