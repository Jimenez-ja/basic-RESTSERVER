const express = require('express');
const cors = require('cors')

class Server{

    constructor(){

        this.app = express();

        this.port = process.env.PORT;

        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares();
        //Rutas de la app
        this.routes();


    }

    middlewares(){

        //cors
        this.app.use(cors());

        //lectura y parseo del body
        this.app.use(express.json());

        //carpeta publica
        this.app.use(express.static('public/'));


    }

    routes(){

        this.app.use(this.usuariosPath, require('../routes/user'));
        
    }

    listen(){

        this.app.listen(this.port , ()=> {
            console.log(`App corriendo en el puerto ${this.port}`);
        });

    }


}

module.exports = Server;