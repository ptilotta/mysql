require('../config/mysql');

const express = require('express');
const app = express();

//---------------------------------------------------------------------
// Lee la tabla Juegos del sitio JUEGOSFL.COM
//---------------------------------------------------------------------
app.get('/juegos', function(req, res) {

    var bd = new mySQL;

    let traigoJuegos = async() => {
        await bd.conectar();
        bd.sql = process.env.sql;
        await bd.leoMySQL();
        if (bd.result) {
            res.status(200).json(bd.result);
        } else {
            res.status(400).json({
                'Mensaje: ': 'Sin Resultados'
            });
        }
    }
    traigoJuegos();
});

module.exports = app;