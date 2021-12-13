'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    descripcion: String,
    categoria: String,
    fecha: Number
})

module.exports = mongoose.model('Project', ProjectSchema);