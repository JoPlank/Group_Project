// Load the GeoJSON data
const GEOJSON_FILE = "Bike_Paths_Graz.geojson";

async function addBikePaths() {

    const response = await fetch(GEOJSON_FILE);

    if (!response.ok) {
        throw new Error("loading file failed");
    }

    let geojsonData = await response.json();
    console.log(geojsonData);
    L.geoJSON(geojsonData).addTo(map);
   
}

async function removeBikePaths() {
    L.removeGeoJSON(map);
   
}

