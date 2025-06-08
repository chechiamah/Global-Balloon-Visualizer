//ACCESS TOKEN
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzZjAxOWFkYy04ZDBjLTQwYTctOTc2MC0xM2Q1ZmZmMWQ1MjQiLCJpZCI6MzEwMzMyLCJpYXQiOjE3NDk0MTU4MDV9.lmpANqT6nH_n-skUSQ6uzlUxMHro1fSAqBmVIabGk74';

// Create the Cesium viewer
const viewer = new Cesium.Viewer("cesiumContainer", {
  shouldAnimate: true
});

// SKETCHFAB ASSET
const assetId = 3446467;

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
