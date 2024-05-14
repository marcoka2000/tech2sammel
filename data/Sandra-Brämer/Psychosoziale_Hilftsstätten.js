// Map 2 HTW Standorte hinzufügen
$.getJSON("maps/map.geojson", function(data) {
  var mapmapsycho = L.geoJSON(data, {
  style: {		
  },
  pointToLayer: function(feature,latlng){
    return L.marker(latlng,{icon: iconHTW});
  },
  onEachFeature: funktionenHTW,
  }).addTo(map);
});

// Einbinden des Piktogramm als Icon
var iconelipse = L.icon({
  iconUrl: 'img/1aq.png',
  iconSize: [10],
});
// Map 2 HTW Standorte hinzufügen
$.getJSON("maps/Psychosoziale_Hilftsstätten", function(data) {
  var mapPsychosoziale_Hilftsstätten = L.geoJSON(data, {
  style: {		
  },
  pointToLayer: function(feature,latlng){
    return L.marker(latlng,{icon: iconHTW});
  },
  onEachFeature: funktionenHTW,
  }).addTo(map);
});

};