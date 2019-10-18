var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var detalleSchema = new Schema({
    usuario: String,
    estado: String,
    fecha: String,
    envio: String,
    descripcion: String,
    detalle: String,
    tipo: String,
    latitud: String,
    longitud: String
});
module.exports = mongoose.model("Detalle", detalleSchema);