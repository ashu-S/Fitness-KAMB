// <!-- Google places Maps script here -->
    // <!-- <script> -->
var data;
var map;
var infoWindow;
var request;
var service;
var markers=[];

// Zomato Script here
    // <script type="application/javascript">
    function onload(param) {
        Zomato.init({
            key: "c8e2f5b03a41606edd2c1b651d82edec"
        });
     // ***** THIS IS THE ONLY FUNCTION YOU NEED TO CALL!!!
        Zomato.search({
            latitude: 29.779043,
            longitude: -95.5450048
        }, [143, 164, 998, 308], function(s) {
            // document.getElementById("geocode_op").innerHTML = JSON.stringify(s);
            console.log(s);
            data = s;
            // console.log(data.restaurants[3].restaurant.location.latitude,data.restaurants[3].restaurant.location.longitude);
            // invoke Google API pass response as a parameter

            initialize(s);


               }, function(e) {
            // document.getElementById("geocode_op").innerHTML = "*******ERROR******" + JSON.stringify(e);
            console.log(e)


        });
    }



     //-------- Here I'm incorporating the Google API code--------
    function initialize(res) {
        console.log("in initialize")
        console.log(res);
        //console.log(data.restaurants[].restaurant.location.latitude,data.restaurants[].restaurant.location.longitude);  
        // console.log(data.restaurants[3].restaurant.location.latitude,data.restaurants[3].restaurant.location.longitude);  
        var center = new google.maps.LatLng(res.restaurants[3].restaurant.location.latitude,res.restaurants[3].restaurant.location.longitude);

        map = new google.maps.Map(document.getElementById('map'), {
          center: center,
          zoom: 13
        });

        callback(res)

/*
     request = {
        location: center,
        radius:8047,  //5 miles in meters
        types: ['restaurant']  ///can use for various places
      };

      infoWindow = new google.maps.InfoWindow();

      service = new google.maps.places.PlacesService(map);

      service.nearbySearch(request, callback);

      google.maps.event.addListener(map, 'rightclick', function(event){
        map.setCenter(event.latLng)
        clearResults(markers)

        var request = {
          location: event.latLng,
          radius: 8047,
          types: ['restaurant']
        };

        service.nearbySearch(request, callback); 

      }) */
    }

    function callback(results,status){

      //if (status == google.maps.places.PlacesServiceStatus.OK){
        for (var i=0; i< results.restaurants.length;i++){
          markers.push(createMarker(results.restaurants[i]));
          }
      //}
    }

    // place is a Zomato object
    function createMarker(place){
      var placeLoc = place.restaurant.location;
      var marker = new google.maps.Marker({
        map: map,
        // converting from Zomato format (string) to Google format (floating point)
        position: {lat: parseFloat(placeLoc.latitude), lng: parseFloat(placeLoc.longitude)}
      });
    
    google.maps.event.addListener(marker, 'click', function(){
        infoWindow.setContent(place.name);
        // infoWindow.setContent(place.rating);
        infoWindow.open(map,this);
    });

    return marker;

  } 
  
  function clearResults(markers){
    for (var m in markers){
      markers[m].setMap(null)
    }
    markers = []
  }

       //google.maps.event.addDomListener(window, 'load', initialize);
  //----------END of Google API code------------ 



  // </script>    

           
    // <!-- </script> -->