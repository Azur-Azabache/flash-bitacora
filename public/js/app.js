$(document).ready(function() {
  var $textArea = $('#icon_prefix2');
  var $btnPostText = $('#btnPost');
  var $btnPostImage = $('#btnPostImage');
  var $container = $('#container-posts');
  moment.locale('es');
  var $date = moment().format('lll');
  var $postImage= $('#postImage');
  var $inputText= $('#contentInput');
  var $inputImage= $('#contentInput2');
  var img = 'bleble';
  $textArea.focus();
  // Función para habilitar boton de post
  $textArea.on('input', function() {
    if ($textArea.val() === '') {
      $btnPostText.addClass('disabled');
    } else {
      $btnPostText.removeClass('disabled');
    }
  });

  //Función para postear texto
  $btnPostText.on('click', function(){
    var $text = $textArea.val();
      $($container).prepend('<div class="postear"><span class="date">' + $date + '</span><br><br><p>' + $text + '</p></div>');
      $textArea.val('');
  });

//Función para postear imagen
  $btnPostImage.on('click', function(){
  if (window.FileReader && window.FileList && $('#file').val() !== '') {
      $($container).prepend('<div class="postear"><span class="date">' + $date + '</span><br><br><img class="imageUpload center" src="' + img + '"></div>');
} else {
  alert('No se puede cargar archivos en esta navegador, porfavor use otro');
}
$('#path').val('');
  });

//Para cargar imagenes
  $('#file').on('change', function(event) {
     var file = event.target.files[0];
     var fileReader = new FileReader();
     fileReader.onload = function(event2) {
       img = event2.target.result;
     };
     $btnPostImage.removeClass('disabled');
     fileReader.readAsDataURL(file);
     console.log($('#file').val());
   });

//Función para aparecer input de imagen
$postImage.on('click', function(){
  $inputText.addClass('hide');
  $btnPostText.addClass('hide');
  $inputImage.removeClass('hide');
  $btnPostImage.removeClass('hide');
  });

//Función para aparecer input de texto
$('#postText').on('click', function(){
    $inputText.removeClass('hide');
    $btnPostText.removeClass('hide');
    $inputImage.addClass('hide');
    $btnPostImage.addClass('hide');
    });
});
