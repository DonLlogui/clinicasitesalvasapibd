// app.js
const express = require('express');
const app = express();
const medicoRoutes = require('./vista/MedicoRutas'); // Ajusta la ruta si es necesario

// Middlewares
app.use(express.json()); // Para leer JSON en las peticiones

// Rutas
app.use('/medicos', medicoRoutes);

// Ruta base
app.get('/', (req, res) => {
    res.send('API de Médicos funcionando');
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
