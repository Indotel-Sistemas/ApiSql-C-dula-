const dboperations = require('./dboperations');
var express = require('express');
var bodyParser= require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();



app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);
 
 router.route('/usuarios/:cedula').get((request,response)=>{
 
    dboperations.getUsuario(request.params.cedula).then(result => {
        response.json(result[0]);
     })
 
 })

 //Puerto 
var PORT = process.env.PORT || 1240;
app.listen(PORT);
console.log('User API is runnning at ' + PORT);