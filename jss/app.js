$(document).ready(function() {
$('#btnName').click(function(){
    var text = $('#inputName').val() + '<button id="x">x</button>'+'<input id="check" type="checkbox">';
    if(text.length){
        $('<li />', {html: text}).appendTo('ul.justList')
    }
});

$('ul').on('click','button' , function(el){
    $(this).parent().remove()
 });
$(".justList").on("click","input",function(){
	var $li = $(this).closest("li");
	$li.addClass("strike");
});
});

  
	






