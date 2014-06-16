$(document).ready(function() {

//ADD Button with Remove Button
$('#btnName').click(function(){
    var text = $('#inputName').val() + '<button id="x">x</button>'+'<input id="check" type="checkbox">';
    if(text.length){
        $('<li />', {html: text}).appendTo('ul.justList')
    }
});

$('ul').on('click','button' , function(el){
    $(this).parent().remove()
 });

$('.justList input').on('click', function () {
  var $li = $(this).closest('li');
  $li.wrap('<strike>')
  console.log($li);
  });
});

  
	
//event that marks throug a list item 





