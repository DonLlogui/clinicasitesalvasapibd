const Paciente = require('../modelo/PacienteModelo');

const PacienteControlador = {
    async vistaTodo(req, res) {
        try {
            const pacientes = await Paciente.mostrarTodo();
            res.status(200).json(pacientes);
        } catch (error) {
            console.error('Error al mostrar pacientes:', error);
            res.status(500).json({ mensaje: 'Error al obtener los pacientes' });
        }
    },

    async vistaDoc(req, res) {
        const { t1: id } = req.params;
        try {
            const pacientes = await Paciente.mostrarDoc(id);
            res.status(200).json(pacientes);
        } catch (error) {
            console.error('Error al mostrar paciente:', error);
            res.status(500).json({ mensaje: 'Error al obtener el paciente' });
        }
    },

    async crearPaciente(req, res) {
        const { t1: documento, t2: nombres, t3: telefono, t4: correo, t5: direccion } = req.body;

        if (!documento || !nombres || !telefono || !correo || !direccion) {
            return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
        }

        try {
            const nuevoPaciente = new Paciente(documento, nombres, telefono, correo, direccion);
            const pacienteGuardado = await nuevoPaciente.guardarPaciente();
            res.status(201).json(pacienteGuardado);
        } catch (error) {
            console.error('Error al crear paciente:', error);
            res.status(500).json({ mensaje: 'Error al crear el paciente' });
        }
    },

    async actualizarPaciente(req, res) {
        const { id } = req.params;
        const { t1: documento, t2: nombres, t3: telefono, t4: correo, t5: direccion } = req.body;

        const datos = { documento, nombres, telefono, correo, direccion };

        // Limpia campos vacíos o undefined
        Object.keys(datos).forEach(key => {
            if (!datos[key]) delete datos[key];
        });

        if (Object.keys(datos).length === 0) {
            return res.status(400).json({ mensaje: 'No hay datos para actualizar' });
        }

        try {
            const pacienteExistente = await Paciente.getById(id);
            if (!pacienteExistente) {
                return res.status(404).json({ mensaje: 'Paciente no encontrado' });
            }

            const pacienteActualizado = await Paciente.editarPaciente(id, datos);
            res.status(200).json(pacienteActualizado);
        } catch (error) {
            console.error('Error al actualizar paciente:', error);
            res.status(500).json({ mensaje: 'Error al actualizar el paciente' });
        }
    }
};

module.exports = PacienteControlador;
