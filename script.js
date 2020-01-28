mapa1 = document.getElementById("mapa1");
mapa2 = document.getElementById("mapa2");
mapa3 = document.getElementById("mapa3");
mapa4 = document.getElementById("mapa4");
mapa5 = document.getElementById("mapa5");

przycisk1 = document.getElementById("przycisk1");
przycisk2 = document.getElementById("przycisk2");
przycisk3 = document.getElementById("przycisk3");
przycisk4 = document.getElementById("przycisk4");


require(["esri/Map", "esri/views/MapView"],
    function(Map, MapView){
        mapa1.addEventListener("click", function(){
            let map1 = new Map({basemap:"topo"}); //słowo klucz new + nazwa modułu
            let mapContainer = new MapView({
                container: "mapa",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
                map: map1,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
                zoom: 12,
                center: [22.57, 51.25]
            })
        })
    }
);

require(["esri/Map", "esri/views/MapView"],
    function(Map, MapView){
        mapa2.addEventListener("click", function(){
            let map1 = new Map({basemap:"streets"}); //słowo klucz new + nazwa modułu
            let mapContainer = new MapView({
                container: "mapa",
                map: map1,
                zoom: 12,
                center: [22.57, 51.25]
            })
        })
    }
);

require(["esri/Map", "esri/views/MapView"],
    function(Map, MapView){
        mapa3.addEventListener("click", function(){
            let map1 = new Map({basemap:"satellite"}); //słowo klucz new + nazwa modułu
            let mapContainer = new MapView({
                container: "mapa",
                map: map1,
                zoom: 12,
                center: [22.57, 51.25]
            })
        })
    }
);

require(["esri/Map", "esri/views/MapView"],
    function(Map, MapView){
        mapa4.addEventListener("click", function(){
            let map1 = new Map({basemap:"streets"}); //słowo klucz new + nazwa modułu
            let mapContainer = new MapView({
                container: "mapa",
                map: map1,
                zoom: 12,
                center: [22.57, 51.25]
            })
        })
    }
);

require(["esri/Map", "esri/views/MapView", "esri/WebMap"],
    function(Map, MapView, WebMap, webMercatorUtils){
        mapa5.addEventListener("click", function(){
            let map1 = new WebMap({
                portalItem:{
                    id: "ef139263371049d99aec9894f1c09258"
                }
            })
            let mapContainer = new MapView({
                container: "mapa",
                map: map1, 
                zoom:12,
                center: [22.57, 51.25]
            }); 
        })
    }
);




