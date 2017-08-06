<<<<<<< HEAD
//var slideIndex = 0;
//showSlides();

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex> slides.length) {slideIndex = 1} 
//     slides[slideIndex-1].style.display = "block"; 
//     setTimeout(showSlides, 5000); // Change image every 5seconds
// }
//$('#myModal').modal('show');
$(document).ready(function(){
	//	alert("hi");
	// event.preventDefault();
	//$(".loginInButton").on("click",function(){
	//	alert("hi");
	//	console.log($('#myModal'));
		//$('#myModal').modal('show');
		$('#myModal').modal('show');
});

// function fnlogin(){
// 
// 	
// }

// $('#myModal').modal('show');
// });
=======
//Most Recently Done: Copy and pasted Bonnie's code onto this page to incorporate it into the restaurants page.

$(document).ready(function(){

	$('.createAccountButton').on("click", function(event) {
		event.preventDefault();
		$('#myModal').modal();
	});


});
>>>>>>> c4ca43d3b5c564bd4b0541209fa9185a001864de
