$(document).ready(function(){

	$('.createAccountButton').on("click", function(event) {
		event.preventDefault();
		$('#myModal').modal();
	});

	$('#buttonLogin').on("click", function(event) {
		event.preventDefault();
		$('#myModal').modal();
	});

  $('.calcGoals').on("click", function(event) {
    event.preventDefault();
    $('#myModal').modal();
  });

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA4H2dmpHWDTIpH4jUuTEIlz_neie3sC1w",
    authDomain: "fitnesskamb-5523a.firebaseapp.com",
    databaseURL: "https://fitnesskamb-5523a.firebaseio.com",
    projectId: "fitnesskamb-5523a",
    storageBucket: "fitnesskamb-5523a.appspot.com",
    messagingSenderId: "1005316596834"
  };
  
  firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();

  //Capture Values

  var username = "";
  var email = "";
  var password = "";
  var confirmPassword = "";

  //Capture submit click
  $('#saveReg').on("click", function(event) {
  	event.preventDefault();

  	//Now grabbing values from input boxes
  	username = $(".inputUsername").val().trim();
  	email = $(".inputAccountEmail").val().trim();
  	password = $(".inputAccountPassword").val().trim();
  	confirmPassword = $(".inputConfirmAccountPassword").val().trim();

  	//We push
      database.ref().push({
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword
      });

  });

  // Firebase watcher + initial loader
    database.ref().on("value", function(snapshot) {


      $("#userHeader").html(snapshot.val().username);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


















});

