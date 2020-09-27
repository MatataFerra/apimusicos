const express = require('express');
const app = express();
require('dotenv/config');

const port = process.env.PORT;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Conectado al puerto ${port}`)
});