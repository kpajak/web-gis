mapa1 = document.getElementById("mapa1");
mapa2 = document.getElementById("mapa2");
mapa3 = document.getElementById("mapa3");
mapa4 = document.getElementById("mapa4");
mapa5 = document.getElementById("mapa5");


require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/layers/GraphicsLayer",
    "esri/widgets/Sketch"
    ], function(Map, MapView, BasemapToggle, BasemapGallery, GraphicsLayer, Sketch) {
        let graphicsLayer = new GraphicsLayer();

        let map = new Map({
            basemap: "topo-vector",
            layers: [graphicsLayer]
        });

        let view = new MapView({
            container: "mapa",
            map: map,
            center: [22.57,51.25],
            zoom: 10
        });

        let basemapToggle = new BasemapToggle({
            view: view,
            nextBasemap: "satellite"
        });

        view.ui.add(basemapToggle, "bottom-right");

        let basemapGallery = new BasemapGallery({
            view: view,
            source: {
              portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: true  // Load vector tile basemaps
              }
            }
        });

        view.ui.add(basemapGallery, "top-right");

        view = new MapView({
            container: "mapa",
            map: map,
            center: [22.57,51.25],
            zoom: 10
        });
    
        let sketch = new Sketch({
            view: view,
            layer: graphicsLayer
        });
    
        view.ui.add(sketch, "top-right");

});


