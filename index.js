const express = require('express');
const multer  = require('multer');
const upload = multer({ dest: 'images/' });

const app = express();

app.post('/upload', upload.single('photo'), (req, res) => {
  console.log(req.file);
  res.send('Arquivo recebido.');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
