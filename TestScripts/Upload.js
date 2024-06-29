const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

async function uploadImage(filePath) {
  const form = new FormData();
  form.append('image', fs.createReadStream(filePath));

  try {
    const response = await axios.post('http://localhost:3000/upload', form, {
      headers: {
        ...form.getHeaders()
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Erro ao fazer upload:', error.message);
  }
}

uploadImage('./uploads/image.png');