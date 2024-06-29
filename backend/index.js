const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  });
  
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
    if (req.file) {
      res.send(`Arquivo ${req.file.filename} recebido com sucesso!`);
    } else {
      res.status(400).send('Erro ao fazer upload do arquivo.');
    }
});

app.get('/status', (req, res) => {
  res.send('Rodando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});