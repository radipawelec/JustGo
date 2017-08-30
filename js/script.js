function intMap() {

        var map = new google.maps.Map(document.getElementById('googleMap'), {
          zoom:2,
          center: {lat: -13.5446087, lng: 69.7414298}
        });

        // Create an array of alphabetical characters used to label the markers.
        var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        // Add some markers to the map.
        // Note: The code uses the JavaScript Array.prototype.map() method to
        // create an array of markers based on a given "locations" array.
        // The map() method here has nothing to do with the Google Maps API.
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }
      var locations = [
        {lat: -13.5446087, lng: 69.7414298},
        {lat: -33.848588, lng: 115.2224307},
        {lat: 34.5004937, lng: 86.091891},
        {lat: 46.1281441, lng: -2.2772735},
        {lat: 64.9144382, lng: -21.2557765},
        {lat: -18.7255314, lng: 42.3403634},
        {lat: 23.3660521, lng: -111.5565413},
        {lat: 52.232855, lng: 20.9211131},
        {lat: -28.4055171, lng: 20.1805174},
        {lat: 25.0609595, lng: 51.8522399},
      ]