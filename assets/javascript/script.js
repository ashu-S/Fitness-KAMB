$(document).ready(function(){

	$('.createAccountButton').on("click", function(event) {
		event.preventDefault();
		$('#myModal').modal();
	});

	$('#buttonLogin').on("click", function(event) {
		event.preventDefault();
		$('#myModal').modal();
	});

});

