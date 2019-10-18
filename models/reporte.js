var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var reporteSchema = new Schema({
    nombre: { type: String },
    estado: { type: String },
    imagen: { type: String },
    detalle: { type: String },
    envio: { type: String }

});
module.exports = mongoose.model('Reporte', reporteSchema);