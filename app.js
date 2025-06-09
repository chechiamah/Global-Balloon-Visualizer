//ACCESS TOKEN
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZjAxOWFkYy04ZDBjLTQwYTctOTc2MC0xM2Q1ZmZmMWQ1MjQiLCJpZCI6MzEwMzMyLCJpYXQiOjE3NDk0MTU4MDV9.lmpANqT6nH_n-skUSQ6uzlUxMHro1fSAqBmVIabGk74';

// Create the Cesium viewer
const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: Cesium.createWorldTerrain(),
  shouldAnimate: true
});

// SKETCHFAB ASSET
const assetId = 3446467;

const LOCATIONS = {
albuquerque: {
  name: "Albuquerque, NM", 
  coords: [-106.59682763930132, 35.1978416065311, 500]
 }, 
serengeti: {
  name: "Serengeti, Tanzania", 
  coords: [34.83331720209983, -2.3330545791698194, 800]
 }, 
cappadocia: {
  name: "Cappadocia, Türkiye", 
  coords: [34.80863904092292, 38.65878700927503, 700]
 }
};
// GLTF MODEL AND PLACEMENT
Cesium.IonResource.fromAssetId(assetId).then(function (resource) {
  const balloon = viewer.entities.add({
    name: "hot_air_baloon",
    position: Cesium.Cartesian3.fromDegrees(-106.59682763930132, 35.1978416065311, 500), 
    model: {
      uri: resource,
      scale: 2.0,
      minimumPixelSize: 64,
      maximumScale: 200
    }
  });

  viewer.flyTo(balloon);
});

// FLY to LOCATION and UPDATE POS.
window.goTo = function (key) {
  const loc = LOCATIONS[key];
  if (!loc) return;

  const position = Cesium.Cartesian3.fromDegrees(
  loc.coords[0],
  loc.coords[1],
  loc.coords[2]
);

  if (balloon) {
    balloon.position = position;
    viewer.flyTo(balloon);
  }
};
