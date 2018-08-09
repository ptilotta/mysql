const express = require('express');
const app = express();
const conn = require('../config/mysql');

//---------------------------------------------------------------------
// Lee la tabla Juegos del sitio JUEGOSFL.COM
//---------------------------------------------------------------------
app.get('/juegos', function(req, res) {

    let traigoJuegos = async() => {
        try {
            var registros = await conn.query(process.env.sql, (err, result) => {
                if (err) {
                    res.status(400).json(err);
                } else {
                    res.status(200).json(result);
                }
            });
        } catch (error) {
            res.status(400).json(error);
        }
    }
    traigoJuegos();
    conn.cerrar();

});