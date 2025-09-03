// models/Medico.js
const db = require('../bd/Conexion'); // Asegúrate que la ruta sea correcta

class MedicoModelo {
    constructor(nombre, especialidad, telefono, correo, direccion) {
        this.nombre = nombre;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
    }

    static async getAll() {
        try {
            const result = await db.query('SELECT * FROM medico ORDER BY id');
            return result.rows;
        } catch (error) {
            console.error('Error en getAll:', error);
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await db.query('SELECT * FROM medico WHERE id = $1', [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error en getById:', error);
            throw error;
        }
    }

    async save() {
        const query = `
            INSERT INTO medico (nombre, especialidad, telefono, correo, direccion)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id
        `;
        const values = [this.nombre, this.especialidad, this.telefono, this.correo, this.direccion];
        try {
            const result = await db.query(query, values);
            this.id = result.rows[0].id;
            return this;
        } catch (error) {
            console.error('Error en save:', error);
            throw error;
        }
    }

    static async update(id, datos) {
        const fields = Object.keys(datos);
        const values = Object.values(datos);

        if (fields.length === 0) {
            throw new Error('No hay campos para actualizar');
        }

        const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');
        const query = `UPDATE medico SET ${setClause} WHERE id = $${fields.length + 1}`;
        values.push(id);

        try {
            await db.query(query, values);
            return { id, ...datos };
        } catch (error) {
            console.error('Error en update:', error);
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await db.query('DELETE FROM medico WHERE id = $1', [id]);
            return result.rowCount > 0;
        } catch (error) {
            console.error('Error en delete:', error);
            throw error;
        }
    }
}

module.exports = MedicoModelo;