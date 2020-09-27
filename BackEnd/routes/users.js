const express = require('express');
const router = express.Router();
const Instrumento = require('../models/Instrumento');
const User = require('../models/User');
const Genero = require('../models/Genero');

// Get
router.get('/', async (req, res) => {
    let users = await User.findAll({
        include: [Instrumento, Genero]
    });
    res.json(users);
});

// Post usuario normal
router.post('/post', async (req, res) => {
        let usuario = await User.create({
            nombre: req.body.nombre,
            pronombre: req.body.pronombre
        });
        if(!usuario){
            return res.status(404).json({ error: "No se pudo crear" });
        }else{
            res.json(usuario);
        }
});

// Post relaciones de usuarios - genero
require('../asociations');
router.post('/post/relaciongen', async (req, res) => {
    let usuario = req.body.usuario;
    let genero = req.body.genero;
    let usuarioBuscado = await User.findOne({ where: { nombre: usuario }});
    let generoBuscado = await Genero.findOne({ where: { nombre: genero } });
    let resultado = await usuarioBuscado.addGenero(generoBuscado);
    if(!resultado){
        res.status(404).json({ error: "Fallo creando la relacion" });
    }else{
        res.json(resultado);
    }
});

// Post relaciones de usuarios - instrumentos
router.post('/post/relacionins', async (req, res) => {
    let usuario = req.body.usuario;
    let instrumento = req.body.instrumento;
    let usuarioBuscado = await User.findOne({ where: { nombre: usuario }});
    let instrumentoBuscado = await Instrumento.findOne({ where: { nombre: instrumento } });
    let resultado = await usuarioBuscado.addInstrumento(instrumentoBuscado);
    if(!resultado){
        res.status(404).json({ error: "Fallo creando la relacion" });
    }else{
        res.json(resultado);
    }    
})


module.exports = router;