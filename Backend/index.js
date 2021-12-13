'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb:mongodb+srv://JuancC13:JuancC130194@misiontic2022ciclo4.kvdjb.mongodb.net/test?authSource=admin&replicaSet=atlas-97jsa4-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true')
.then(()=>{
    console.log("Conexión a la base de datos establecida con éxito...");

    //Creación del servidor
    app.listen(port,() => {
        console.log("Servidor corriendo correctamente en la url:" + port);
    });
    
})
.catch(err => console.log(err));