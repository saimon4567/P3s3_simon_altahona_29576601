const express = require('express');
const path = require('path');
const app = express();

const { Productos } = require('./crud.js')


app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const port = 3000

app.get('/', (req, res) => {
  res.redirect('/dashboard');
});

app.get('/dashboard', (req, res) => {
  res.render('index.ejs')
});

app.get('/productos', Productos);


  
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
})
