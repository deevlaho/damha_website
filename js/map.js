  var venueMap;                                      // Map() draws a map

function init() {
  var pinLocation = new google.maps.LatLng(45.5050313,-73.5743193);
    
    var mapOptions = {                                 // Set up the map options
    center: pinLocation,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: true,
    zoom: 15
  };

  var venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

var startPosition = new google.maps.Marker({    // Create a new marker
    position: pinLocation,                        // Set its position
    map: venueMap,                                // Specify the map
  });
}


function loadScript() {
  var script = document.createElement('script');     // Create <script> element
  script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyDBeOx55cRSdN57U-hSSr7m3fO16GmCozc&callback=init';
  document.body.appendChild(script);                 // Add element to page
}


window.onload = loadScript;                          // on load call loadScript()
