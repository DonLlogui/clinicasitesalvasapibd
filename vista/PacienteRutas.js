const express = require('express');
const router = express.Router();
const rutapaciente = require('../controlador/PacienteControlador');

router.get('/', rutapaciente.vistaTodo);
router.get('/:t1', rutapaciente.vistaDoc);
router.post('/', rutapaciente.crearPaciente);
router.put('/editar/:id', rutapaciente.actualizarPaciente);

module.exports = router;