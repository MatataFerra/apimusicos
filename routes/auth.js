const express = require('express');
const router = express.Router();
// Dep
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    let user = req.query.user;
    let pass = req.query.password;

});
