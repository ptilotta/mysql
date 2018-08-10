var mysql = require('mysql');

class mySQL {
    constructor() {
        this.host = process.env.host;
        this.user = process.env.user;
        this.password = process.env.password;
        this.bd = process.env.bd;
        this.port = process.env.port;
        this.sql = "";
        this.conn;
        this.result = {};
    };

    async conectar() {
        this.conn = await mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.bd,
            port: this.port
        }, (err, result) => {
            if (err) {
                console.log(`error al conectar a la BD - Error ${err}`);
                return err;
            }

        });

        await this.conn.connect(function(error) {
            if (error) {
                console.log('*************************************************************');
                console.log(`el Error de MySQL es ${error}`);
                console.log('*************************************************************');
                throw error;
            } else {
                console.log('Conexion correcta.');
            }
        });
    }

    async leoMySQL() {
        if (await this.conn.getConnection((error, result) => {
                if (error) throw error;
                this.leo();
            }));
    }

    async leo() {
        await this.conn.query(this.conn.sql, (err, result) => {
            if (err) {
                this.conn.end();
                console.log(err);
                return;
            }
            this.result = result;
        });
    }
}

module.exports = mySQL;