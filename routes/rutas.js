require('../config/mysql');

const express = require('express');
const app = express();

//---------------------------------------------------------------------
// Lee la tabla Juegos del sitio JUEGOSFL.COM
//---------------------------------------------------------------------
app.get('/juegos', function(req, res) {

    var mysql = new mySQL;

    let traigoJuegos = async() => {
        await mysql.conectar();
        mysql.sql = process.env.sql;
        await mysql.leoMySQL();
        if (mysql.result) {
            res.status(200).json(result);
        } else {
            res.status(400).json({
                'Mensaje: ': 'Sin Resultados'
            });
        }
    }
    traigoJuegos();


});

module.exports = app;