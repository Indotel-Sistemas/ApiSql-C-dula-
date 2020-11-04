//Conexcion a sevidor local de la base de datos MsSql
const config = {
    user:'Cesar',
    password:'cesar1299',
    server:'127.0.0.1',
    database: 'Padron',
    options:{
        trustedconnection: true,
        enableArithAbort: true,
        instancename:'SQLEXPRESS'
    },
    port: 51218
}

module.exports = config;
