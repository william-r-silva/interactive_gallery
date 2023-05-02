const express = require('express');
const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    res.status(200).send(response);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
