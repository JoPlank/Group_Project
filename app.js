// Load the map

var MARKERS_MAX = 2;

const map = L.map('map').setView([47.06, 15.44], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// a layer group, used here like a container for markers
var markersGroup = L.layerGroup();
map.addLayer(markersGroup);

map.on('click', function(e) {

    var marker = L.marker(e.latlng).addTo(markersGroup);


});

function removeMarker(){
    markersGroup.clearLayers();
}

function calculateRoute(){
    
}