const express = require('express');
const cors = require('cors');
const { dataConect } = require('./connection');


class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        // this.paths = {
        //     usuarios:   '/api/usuarios',
        // }


        // Middlewares
        this.middlewares();

        // // Rutas de mi aplicación
        // this.routes();
    }



    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

    }

    routes() {
        this.app.get( 'api/data', (req, res) => {
            res.json(dataConect)
        });        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;