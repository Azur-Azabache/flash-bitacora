$(document).ready(function() {
  var $textArea = $('#icon_prefix2');
  var $btnPostText = $('#btnPost');
  var $btnPostImage = $('#btnPostImage');
  var $btnPostEvent = $('#btnPostEvent');
  var $container = $('#container-posts');
  moment.locale('es');
  var $date = moment().format('lll');
  var $postImage= $('#postImage');
  var $inputText= $('#contentInput');
  var $inputImage= $('#contentInput2');
  var $inputEvent= $('#inputEvent');
  var video = 'blublu';
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
      $btnPostText.addClass('disabled');
  });

//Función para postear imagen
  $btnPostImage.on('click', function(){
  if (window.FileReader && window.FileList && $('#file').val() !== '') {
      $($container).prepend('<div class="postear"><span class="date">' + $date + '</span><br><br><img class="imageUpload center" src="' + img + '"></div>');
} else {
  alert('No se puede cargar archivos en esta navegador, porfavor use otro');
}
$('#path').val('');
$inputImage.val('');
$btnPostImage.addClass('disabled');
  });

//Para cargar imagenes
  $('#file').on('change', function (event) {
     var file = event.target.files[0];
     var fileReader = new FileReader();
     fileReader.onload = function(event2) {
       img = event2.target.result;
     };
     $btnPostImage.removeClass('disabled');
     fileReader.readAsDataURL(file);
     console.log($('#file').val());
   });

//Para postear evento con ubicacion
  $('#first_name').on('input', function(){
    if($inputEvent.val() === '' && $('#first_name').val() === ''){
      $btnPostEvent.addClass('disabled');
    }else{
      $btnPostEvent.removeClass('disabled');
    }
  });

  $btnPostEvent.on('click', function(){
      text2= $('#first_name').val();
      eve = $inputEvent.val();
      console.log(eve);
        $($container).prepend('<div class="postear"><span class="date">' + $date + '</span><br><br><span>'+ text2 +'</span><p><strong>Día del Evento: '+eve+'</strong></p><br><div id="map"></div></div>');
        initMap();
      $btnPostEvent.addClass('disabled');
      $inputEvent.val('');
      $('#first_name').val('');

  });

//Datepicker
  $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

//Para postear video o Audio
$('#btnPostVideo').on('click', function(){
  if (window.FileReader && window.FileList && $('#inputVideo').val() !== '') {
      $($container).prepend('<div class="postear"><span class="date">' + $date + '</span><br><br><video src="'+ video +'" controls autoplay></video></div>');
  }
});

$('#inputVideo').on('change', function (event) {
   var fil = event.target.files[0];
   var filReader = new FileReader();
   filReader.onload = function(event2) {
     video = event2.target.result;
   };
   $('#btnPostVideo').removeClass('disabled');
   filReader.readAsDataURL(fil);
   console.log($('#inputVideo').val());
 });


//Función para aparecer input de imagen
$postImage.on('click', function(){
  $inputText.addClass('hide');
  $btnPostText.addClass('hide');
  $btnPostEvent.addClass('hide');
  $('#contentEvent').addClass('hide');
  $inputImage.removeClass('hide');
  $btnPostImage.removeClass('hide');
  $('#btnPostVideo').addClass('hide');
  $('#contentVideo').addClass('hide');
  });

//Función para aparecer input de texto
$('#postText').on('click', function(){
    $inputText.removeClass('hide');
    $btnPostText.removeClass('hide');
    $btnPostEvent.addClass('hide');
    $('#contentEvent').addClass('hide');
    $inputImage.addClass('hide');
    $btnPostImage.addClass('hide');
    $('#btnPostVideo').addClass('hide');
    $('#contentVideo').addClass('hide');
    });

//Función para aparecer input de evento
  $('#postEvent').on('click', function(){
    $inputText.addClass('hide');
    $btnPostText.addClass('hide');
    $btnPostEvent.removeClass('hide');
    $('#contentEvent').removeClass('hide');
    $inputImage.addClass('hide');
    $btnPostImage.addClass('hide');
    $('#btnPostVideo').addClass('hide');
    $('#contentVideo').addClass('hide');
    });
//Funcion para aparecer input de video
  $('#postVideo').on('click', function(){
    $inputText.addClass('hide');
    $btnPostText.addClass('hide');
    $btnPostEvent.addClass('hide');
    $('#contentEvent').addClass('hide');
    $('#btnPostVideo').removeClass('hide');
    $('#contentVideo').removeClass('hide');
    $inputImage.addClass('hide');
    $btnPostImage.addClass('hide');
  });
});
