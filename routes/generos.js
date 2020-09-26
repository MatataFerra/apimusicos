const express = require('express');
const router = express.Router();
const Genero = require('../models/Genero');
const User = require('../models/User');


router.get('/', async (req,res) => {
    let genero = await Genero.findAll({
        include: [User]
    });
    res.json(genero);
});

module.exports = router;