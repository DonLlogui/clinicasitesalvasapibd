// routes/medicoRoutes.js
const express = require('express');
const router = express.Router();
const MedicoControlador = require('../controlador/MedicoControlador');

// Rutas disponibles:
// GET     /medicos          -> listar todos los médicos
// GET     /medicos/:id      -> obtener un médico por ID
// POST    /medicos          -> crear un nuevo médico
// PUT     /medicos/:id      -> actualizar un médico
// DELETE  /medicos/:id      -> eliminar un médico

router.get('/', MedicoControlador.listar);
router.get('/:id', MedicoControlador.obtenerPorId);
router.post('/', MedicoControlador.crear);
router.put('/:id', MedicoControlador.actualizar);
router.delete('/:id', MedicoControlador.eliminar);

module.exports = router;
