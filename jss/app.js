$(document).ready(function() {
$(".ryu").mouseenter(function(){
	$(".ryu-still").hide();
	$(".ryu-ready").show();
	$(".ryu-cool").hide();
	$(".ryu-throwing").hide();
	})
	.mouseleave(function(){
		$(".ryu-ready").hide();
		$(".ryu-still").show();
		$(".ryu-cool").hide();
		$(".ryu-throwing").hide();
	})
	.mousedown(function(){
		playHadouken();
		$(".ryu-cool").hide();
		$(".ryu-still").hide();
		$(".ryu-ready").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
		$(".hadouken").finish().show()
		.animate (
			{"left": "300px"},
			500,
			function(){
				$(this).hide();
				$(this).css("left", "-212px");
			}
		);
	})
	.mouseup (function(){
		$(".ryu-throwing").hide();
		$(".ryu-ready").show();
		$(".ryu-cool").hide();
		$(".ryu-still").hide();
	});
	$("body").keydown(function(){
		if(event.which === 88) {
			$(".ryu-still").hide();
			$(".ryu-ready").hide();
			$(".ryu-throwing").hide();
			$(".ryu-cool").show();
		}
	})
	.keyup(function(){
		$(".ryu-cool").hide();
		$(".ryu-ready").hide();
		$(".ryu-throwing").hide();
		$(".ryu-still").show();
	});
});	

function playHadouken () {
	$("#hadouken-sound") [0].volume = 0.5;
	$("#hadouken-sound") [0].load();
	$("#hadouken-sound") [0].play();
}