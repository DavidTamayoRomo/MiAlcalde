var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var lista_detalle_reporteSchema = new Schema({
    nombre: { type: String },
    ruta: { type: String },
    fecha: { type: String },
    tipo: { type: String },
    size: { type: String }

});
module.exports = mongoose.model('ListaDetalleReporte', lista_detalle_reporteSchema);