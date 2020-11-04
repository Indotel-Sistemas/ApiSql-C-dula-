var Usuario = require('./Usuario');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser= require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

var PORT = process.env.PORT || 9090;
app.listen(PORT);
console.log('User API is runnning at ' + PORT);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


dboperations.getUsuarios().then(result =>{
    console.log(result);
})

router.use((request,response,next)=>{
    console.log('middleware');
    next();
 })
 
router.route('/usuarios').get((request,response)=>{
 
    dboperations.getUsuarios().then(result => {
        response.json(result[0]);
     })
 
 })
 
 router.route('/usuarios/:cedula').get((request,response)=>{
 
    dboperations.getUsuario(request.params.cedula).then(result => {
        response.json(result[0]);
     })
 
 })