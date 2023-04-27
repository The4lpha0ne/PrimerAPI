const express= require ('express'); 
const apiRouter=require('./server');
const app =express();
const port=3000;

apiRouter(app); 
app.use(express.json());

app.get('/', function (req, res){
    res.send('Hola mundo mi primer endpoint');
});


app.listen (port, function(req,res){
    console.log ('Aplicación escuchando en el puerto 3000');
})