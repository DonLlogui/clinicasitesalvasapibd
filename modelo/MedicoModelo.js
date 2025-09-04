const db = require('./bd/Conexion');

class MedicoModelo {
    constructor(nombres, especialidad, telefono, correo, direccion) {
        this.nombres = nombres;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.correo = correo;
        this.direccion = direccion;
    }

    static async getAll() {
        try {
            const result = await db.query('SELECT * FROM medico ORDER BY idmedico');
            return result.rows;
        } catch (error) {
            console.error('Error en getAll:', error);
            throw error;
        }
    }

    static async getById(id) {
        try {
            const result = await db.query('SELECT * FROM medico WHERE idmedico = $1', [id]);
            return result.rows[0];
        } catch (error) {
            console.error('Error en getById:', error);
            throw error;
        }
    }

    async save() {
        const query = `
            INSERT INTO medico (nombres, especialidad, telefono, correo, direccion)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING idmedico
        `;
        const values = [this.nombres, this.especialidad, this.telefono, this.correo, this.direccion];
        try {
            const result = await db.query(query, values);
            this.idmedico = result.rows[0].idmedico;
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
        const query = `UPDATE medico SET ${setClause} WHERE idmedico = $${fields.length + 1}`;
        values.push(id);

        try {
            await db.query(query, values);
            return { idmedico: id, ...datos };
        } catch (error) {
            console.error('Error en update:', error);
            throw error;
        }
    }

    static async delete(id) {
        try {
            const result = await db.query('DELETE FROM medico WHERE idmedico = $1', [id]);
            return result.rowCount > 0;
        } catch (error) {
            console.error('Error en delete:', error);
            throw error;
        }
    }
}

module.exports = MedicoModelo;
