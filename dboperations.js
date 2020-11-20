var config = require('./dbconfig');
const sql = require('mssql');

    async function getUsuario(Cedula) {
        try {
            let pool = await sql.connect(config);
            let product = await pool.request()
                .input('input_parameter', sql.VarChar, Cedula)
                .query("SELECT Cedula,nombres,apellido1,apellido2,IdSexo,FORMAT (getdate(), 'dd-MM-yy') as FechaNacimiento from PADRON where Cedula = @input_parameter");
            return product.recordsets;
    
        }
        catch (error) {
            console.log(console.error);
        }
}

module.exports ={

    getUsuario : getUsuario
}