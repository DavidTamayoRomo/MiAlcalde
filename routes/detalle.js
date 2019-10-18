var express = require('express');
var app = express();
var Detalle = require('../models/detalle');

// ==========================================
// Obtener todos los detalle reporte
// ==========================================
app.get('/', (req, res, next) => {

    Detalle.find({})
        .exec(
            (err, detallereporte) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando usuario',
                        errors: err
                    });
                }

                res.status(200).json({
                    ok: true,
                    detallereporte: detallereporte
                });



            });
});

module.exports = app;