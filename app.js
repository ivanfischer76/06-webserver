require('dotenv').config();

const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//handlebars
//para usar el paquete hbs para renderizar templates
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//middleware
//servir contenido estático
app.use(express.static('public'));

// esto ya no se ejecuta por el middleware anterior
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Iván Fischer',
        titulo: 'Curso de Node de udemy'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Iván Fischer',
        titulo: 'Curso de Node de udemy'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Iván Fischer',
        titulo: 'Curso de Node de udemy'
    });
});

// app.get('/generic', (req, res) => {
//     res.sendFile(__dirname + '/public/generic.html')
// });

// app.get('/elements', (req, res) => {
//     res.sendFile(__dirname + '/public/elements.html')
// });

// app.get('/hola-mundo', (req, res) => {
// res.send('Hello World')
// });

// app.get('*', (req, res) => {
//     res.sendFile(__dirname + '/public/404.html')
// });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

