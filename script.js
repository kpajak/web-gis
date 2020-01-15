require(["esri/Map", "esri/views/MapView"],
function(Map, MapView){
    let map1 = new Map({basemap:"topo"}); //słowo klucz new + nazwa modułu
    let mapContainer = new MapView({
        container: "mapa",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map1  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        
    });
    
});
/*require(["esri/widgets/Zoom"], function(Zoom) {
    let zoom = new Zoom({
        container: "mapa"
        view: view;
    });

});

require(["esri/widgets/NavigationToggle"], 
function(NavigationToggle) { 
    let navigationToggle = new NavigationToggle({
        view: view;
        container: "mapa"
      });
 });*/