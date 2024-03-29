const express = require('express');
const app = express();

// Configuração para servir arquivos estáticos
app.use(express.static('Carroussel'));
app.use(express.static('Images'));
app.use(express.static('Assets'));

// Rota para a página inicial
app.get('/home', (req, res) => {
  res.sendFile(__dirname +'/Carroussel/home.html');
  // res.send('Aqui');
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor está ouvindo na porta 3000...');
});