$(document).ready(function() {

//ADD Button with Remove Button
$('#btnName').click(function(){
    var text = $('#inputName').val() + '<button id="x">x</button>';
    if(text.length){
        $('<li />', {html: text}).appendTo('ul.justList')
    }
});

$('ul').on('click','button' , function(el){
    $(this).parent().remove()
});
});
  
	


//event that marks throug a list item - double click

//event that fades out unwanted items


