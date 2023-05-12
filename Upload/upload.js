const fileInput = document.getElementById('file-input');
const previewImage = document.getElementById('preview-image');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    previewImage.src = event.target.result;
  };

  reader.readAsDataURL(file);
});

$('#preview-image').click(function (e) {
  $('#file-input').trigger('click');
});

$('form').submit(function (e) {
  e.preventDefault();

  var formData = new FormData();
  formData.append('photo', $('input[type=file]')[0].files[0]);

  $.ajax({
    url: '/upload',
    type: 'POST',
    data: formData,
    processData: false,
    contentType: false,
    success: function (data) {
      console.log('Upload concluído.');
    },
    error: function (err) {
      console.error('Erro ao enviar arquivo.', err);
    }
  });
});