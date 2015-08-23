// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require masonry/jquery.masonry
//= require_tree .

var map;
var marker;
var MY_MAPTYPE_ID = 'custom_style';

function initMap() {

  // Boundary variable
  var bounds = new google.maps.LatLngBounds();

  // Map Style
  var features = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ff4400"
            },
            {
                "saturation": -68
            },
            {
                "lightness": -4
            },
            {
                "gamma": 0.72
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon"
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#0077ff"
            },
            {
                "gamma": 3.1
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "hue": "#00ccff"
            },
            {
                "gamma": 0.44
            },
            {
                "saturation": -33
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "hue": "#44ff00"
            },
            {
                "saturation": -23
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "hue": "#007fff"
            },
            {
                "gamma": 0.77
            },
            {
                "saturation": 65
            },
            {
                "lightness": 99
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "gamma": 0.11
            },
            {
                "weight": 5.6
            },
            {
                "saturation": 99
            },
            {
                "hue": "#0091ff"
            },
            {
                "lightness": -86
            }
        ]
    },
    {
        "featureType": "transit.line",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": -48
            },
            {
                "hue": "#ff5e00"
            },
            {
                "gamma": 1.2
            },
            {
                "saturation": -23
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -64
            },
            {
                "hue": "#ff9100"
            },
            {
                "lightness": 16
            },
            {
                "gamma": 0.47
            },
            {
                "weight": 2.7
            }
        ]
    }
  ]

  // Start location variable
  var clearVoice = new google.maps.LatLng(33.594656, -111.979280);

  // Map Options
  var mapOptions = {
    zoom: 10,
    center: clearVoice,
    scrollwheel: false,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
    mapTypeId: MY_MAPTYPE_ID
  };

  // Google Map
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Custom Style Map
  var styledMapOptions = {
      name: 'Custom Style'
  };
  var customMapType = new google.maps.StyledMapType(features, styledMapOptions);
  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

  // Current User Location
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  //     map.setCenter(initialLocation);
  //   });
  // }

  // Ruby Hash to JS Array
  var yelpArray = gon.yelp_hash.businesses;

  // Setup information window
  var infoWindow = new google.maps.InfoWindow(), marker, i;

  // Loop through array to pull out needed values
  for (var i = 0; i < yelpArray.length; i++) {
    // Marker variables
    var lat = yelpArray[i].location.coordinate.latitude;
    var lon = yelpArray[i].location.coordinate.longitude;
    var positionMarker = new google.maps.LatLng(lat, lon);
    bounds.extend(positionMarker);

    // Marker setup
    marker = new google.maps.Marker({
        map: map,
        position: positionMarker,
        animation: google.maps.Animation.DROP,
        title: yelpArray[i].name
    });

    // Display Information in Box
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
        infoWindow.setContent(yelpArray[i].name);
        infoWindow.open(map, marker);
      }
    })(marker, i));

    // Map fits around markers
    map.fitBounds(bounds);
  }
}
