const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, '/public'));

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'html');

app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.render('index.html')
})

app.get('/about', (req, res) => {
    res.render('about.html')
})

app.get('/module', (req, res) => {
    res.render('api.html')
})

app.listen(3000, '0.0.0.0' () =>{
    console.log('Trwa nasluchiwanie')
});
