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

      // storing the snapshot.val() in a variable for convenience
      var sv = snapshot.val();
      
      // Getting an array of each key In the snapshot object
      var svArr = Object.keys(sv);

      // Finding the last user's key
      var lastIndex = svArr.length - 1;

      var lastKey = svArr[lastIndex];

      // Using the last user's key to access the last added user object
      var lastObj = sv[lastKey]

      // Console.loging the last user's data
      console.log(lastObj.username);
      console.log(lastObj.email);
      console.log(lastObj.password);
      console.log(lastObj.confirmPassword);

      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


















});

