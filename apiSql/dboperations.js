var config = require('./dbconfig');
const sql = require('mssql');

async function getUsuarios(){
    try{
    let pool = await sql.connect(config);
    let padron = await pool.request().query('SELECT * from Usuarios');
    return padron.recordsets;
    }
    catch(error){
        console.log(console.error);
    }
}
    async function getUsuario(Cedula) {
        try {
            let pool = await sql.connect(config);
            let product = await pool.request()
                .input('input_parameter', sql.Int, Cedula)
                .query("SELECT * from Usuarios where Cedula = @input_parameter");
            return product.recordsets;
    
        }
        catch (error) {
            console.log(error);
        }
}

module.exports ={
    getUsuarios : getUsuarios,
    getUsuario : getUsuario
}