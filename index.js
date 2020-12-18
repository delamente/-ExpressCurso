

const { response } = require('express');
const express = require('express');
const { request } = require('http');
const morgan = require('morgan');
const app = express();

//Configuraciones
app.set('appName','Tutorial Express'); 
app.set('port', 3000);
app.set('view engine', 'ejs');



//middlewares
app.use(express.json());
app.use(morgan('dev'));

/*
app.all('/user',(req, res, next) => {
    console.log('paso por aqui');
    next();
})
*/
app.get('/', (req, res) => {
    const data = [{name: 'jhon'}, {name: 'julie'}, {name: 'amir'}];
    res.render('index.ejs', {people: data});
 });



 app.get('/user', (req, res) => {
    res.json({
        username: 'Alexis',
        lastname: 'Howe'

    });
 });


 app.post('/user/:id',(req, res)=> {
     console.log(req.body);
     console.log(req.params)
    res.send ('about mePost recibido');
 });

 app.put('/user/:id',(req, res)=> {
     console.log(req.body);
    res.send (`User ${req.params.userId} Update`);
 });


 app.delete('/user/:userId',(req, res)=> {
    res.send (`User ${req.params.userId} deleted`);
 });


app.use(express.static('public'));


app.listen(app.get('port'), () =>{
    console.log(app.get('appName'));
    console.log('Server port', app.get('port'));
});

 