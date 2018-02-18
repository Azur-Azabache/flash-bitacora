$(document).ready(function() {
  var $textArea = $('#icon_prefix2');
  var $btnPost = $('#btnPost');
  var $container = $('#container-posts');
  moment.locale('es');
  var $date = moment().format('lll');
  var $postImage= $('#postImage');
  var $inputText= $('#contentInput');
  var $inputImage= $('#contentInput2');
  $textArea.focus();
  // Función para habilitar boton de post
  $textArea.on('input', function() {
    if ($textArea.val() === '') {
      $btnPost.addClass('disabled');
    } else {
      $btnPost.removeClass('disabled');
    }
  });

  //Función para postear texto
  $btnPost.on('click', function(){
    var $text = $textArea.val();
      $($container).addClass('containerPosts');
      $($container).prepend('<div class="postear"><span class="date">' + $date + '</span><br><br><p>' + $text + '</p></div>');
      $textArea.val('');
  });

//Función para postear imagen


//Función para aparecer input de imagen
$postImage.on('click', function(){
  $inputText.addClass('hide');
  $inputImage.removeClass('hide');
  });

//Función para aparecer input de texto
$('#postText').on('click', function(){
    $inputText.removeClass('hide');
    $inputImage.addClass('hide');
    });
});
