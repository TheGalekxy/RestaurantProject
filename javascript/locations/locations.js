var userLocation;
var distanceArray = [];
var markerText = [];
var content = [];
var infoWindow = [];
const locations = [{ lat: 43.648760, lng: -79.396608, name: "Taj Mahal Fashion District", address:  "160 Spadina Ave, Toronto, ON"},
  { lat: 43.773866, lng: -79.413635, name: "Taj Mahal North York", address:  "24 Church Ave, North York, ON"},
  { lat: 43.663281,lng: -79.419341, name: "Taj Mahal Christie Pitts", address:  "745 Bloor St W, Toronto, ON"},
  { lat: 43.592788, lng: -79.640643, name: "Taj Mahal Square One", address:  "300 City Centre Dr, Mississauga, ON"}];

//Add in marker text for more info
const marker1Text = "<h2>Taj Mahal Fashion District</h2><p>160 Spadina Ave, Toronto, ON</p>";
const marker2Text = '<h2>Taj Mahal North York</h2><p>24 Church Ave, North York, ON</p>';
const marker3Text = "<h2>Taj Mahal Christie Pitts</h2><p>745 Bloor St W, Toronto, ON</p>";
const marker4Text = "<h2>Taj Mahal Square One</h2><p>300 City Centre Dr, Mississauga, ON</p>";

const toronto = { lat: 43.650102, lng: -79.380690 };

function initMap() {
  //Initialize new map object
  map = new google.maps.Map(document.getElementById("map"), {
      center: toronto,
      zoom: 9,
    });
  // Instantiate geocode object
  const geocoder = new google.maps.Geocoder();

  // Instantiate new marker objects for every location, this could probably be done in a loop in hindsight
  const marker1 = new google.maps.Marker({
      position: locations[0],
      map: map,
      title: locations[0].name
    });
  addMarkerText(marker1,marker1Text);

  const marker2 = new google.maps.Marker({
      position: locations[1],
      map: map,
      title: locations[1].name
    });
  addMarkerText(marker2,marker2Text);

  const marker3 = new google.maps.Marker({
      position: locations[2],
      map: map,
      title: locations[2].name
    });
  addMarkerText(marker3,marker3Text);

  const marker4 = new google.maps.Marker({
      position: locations[3],
      map: map,
      title: locations[3].name
    });
  addMarkerText(marker4,marker4Text);

  //when the submit button is clicked, locate the closest locations based on the postal code
  $("#submit").click(function() { getPostalCodeLocation(geocoder,map); });
  $("#LocationForm").submit(function() { getPostalCodeLocation(geocoder,map); return false; });


}
//Creates a new geocoder object and extracts coordinates from postal code
function getPostalCodeLocation(geocoder,resultsMap) {
  //Extract form values
  var postalCode = document.forms.PostalCodeForm.PostCode;
  //Configure geocode request
  var geoCoderRequest = {
    address: postalCode.value,
    region: "Ca"
  };

  //Send geocode request
  geocoder.geocode(geoCoderRequest, function(results, status) {
    if(status === "OK") {
      //Set background colour back to white after a bad request
      postalCode.style.backgroundColor = "white";
      userLocation = results[0].geometry.location;

      for(var i = 0; i < locations.length; i++){
        // computeDistanceBetween function kinda weird, so put locations coordinates inside a LatLng object first
        locations[i].coordinates = new google.maps.LatLng(locations[i].lat,locations[i].lng);
        var distance = google.maps.geometry.spherical.computeDistanceBetween(userLocation,locations[i].coordinates);

        // Add distance to locations objects, for later use
        locations[i].distance = distance;
      }

      //Object sorting solution derived from https://stackoverflow.com/questions/5503900/how-to-sort-an-array-of-objects-with-jquery-or-javascript
      locations.sort(function(a,b) {
        //If the location distance are the same, don't sort
        if(a.distance == b.distance) {
          return 0;
        }
        // If a is farther than b, put a after b
        else if (a.distance > b.distance) {
          return 1;
        }
        // If a is closer than b, a comes before b
        else if (a.distance < b.distance) {
          return -1;
        }
      });

      //Create list of locations sorted by distance
      for(var i = 0; i < locations.length; i++){
        var newListItem = locations[i].name + ", " + locations[i].address + " [" + (locations[i].distance/1000).toFixed(1) + " km]";
        $(".LocationsListItem").eq(i).text(newListItem);
      }

      // Reveal list of locations
      map.setCenter(locations[0].coordinates);
      map.setZoom(14);
      $("aside").show();
    }
    //geocode request error handling
    else {
      console.log("Geocoder not successful because: " + status);
      postalCode.style.backgroundColor = "#ffbbbb";
      postalCode.placeholder = "Please enter a postal code"
    }
  });
}

// Creates a new marker object and adds an event handler to the marker
function addMarkerText(marker, content){
  const infowindow = new google.maps.InfoWindow({
  content: content
  });
  marker.addListener("click", function() {infowindow.open(map, marker);});
}
