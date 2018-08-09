const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false })) // Convierte la URL en formato correcto
app.use(bodyParser.json()); // Convierte el Body en un formato JSON
app.use(require('../routes/rutas')); // el archivo rutas.js procesa los POSTs y GET

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});