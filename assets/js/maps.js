// function initMap(){
//     var map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 3,
//         center: {
//             lat: 46.619261,
//             lng: -33.134766
//         }
//     });

//     // var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     // var locations = [
//     //     { lat: 40.785091, lng: -73.968285 },
//     //     { lat: 41.084045, lng: -73.874245 },
//     //     { lat: 40.754932, lng: -73.984016 }
//     // ];

//     // var markers = locations.map(function(location, i) {
//     //     return new google.maps.Marker({
//     //         position: location,
//     //         label: labels[i % labels.length]
//     //     });
//     // });

//     // var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
// }


// below code from https://developers.google.com/maps/documentation/javascript/examples/advanced-markers-simple#maps_advanced_markers_simple-javascript
async function initMap() {
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
      center: { lat: 46.619261, lng: -33.134766 },
      zoom: 3,
      mapId: "4504f8b37365c3d0",
    });
    const marker = new AdvancedMarkerElement({
      map,
      position: { lat: 40.785091, lng: -73.968285 },
    });
    const marker2 = new AdvancedMarkerElement({
        map,
        position: { lat: 41.084045, lng: -73.874245 },
      });
      const marker3 = new AdvancedMarkerElement({
        map,
        position: { lat: 40.754932, lng: -73.984016 },
      });
  }
  
  initMap();