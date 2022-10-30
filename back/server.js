const express = require('express');
const cors = require('cors');
const { dataConect, data } = require('./connection');


class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/data';

        // this.paths = {
        //     usuarios:   '/api/usuarios',
        // }


        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }



    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

    }

    routes() {
        this.app.use( this.usuariosPath, require('./routes/routes'));        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;