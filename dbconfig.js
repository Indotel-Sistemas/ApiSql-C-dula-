//Conexcion a sevidor local de la base de datos Mssql
const config = {
    user:'cgonzalez',
    password:'ce12345',
    server:'SVR-DEV',
    database: 'Padron2016',

    options:{
        trustedconnection: true,
        enableArithAbort: true,
        instancename:'MSSQLSERVER'
    }
}

module.exports = config;
