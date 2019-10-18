var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var eventoSchema = new Schema({
    titulo: { type: String },
    descripcion: { type: String },
    estado: { type: String },
    imagen: { type: String },
    video: { type: String },
    envio: { type: String }
});
module.exports = mongoose.model('Evento', eventoSchema);