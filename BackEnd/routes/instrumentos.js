const express = require('express');
const router = express.Router();
const Instrumento = require('../models/Instrumento');
const User = require('../models/User');


router.get('/', async (req,res) => {
    let instrumento = await Instrumento.findAll({
        include: [User]
    });
    res.json(instrumento);
});

module.exports = router;