$(document).ready(function() {

//Allows Enter Keystroke
  //$('#entry').mouseenter(function() {
    //alert('mouse entered .ryu div');
$('#btnName').click(function(){
    var text = $('#inputName').val() + '<button>x</button>';
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


