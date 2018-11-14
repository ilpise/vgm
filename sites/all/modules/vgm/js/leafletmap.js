/**
 * @file
 * rv_menuliks.js
 *
 * Provides links text speech.
 */

var Drupal = Drupal || {};

(function($, Drupal){
  "use strict";

  Drupal.behaviors.LeafletMap = {
    attach: function(context) {
      var map = L.map('map').setView([45.8095388, 9.0886403], 17);

      // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      // }).addTo(map);

      L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGlzZXdpcCIsImEiOiJjajlyOGptOTQycjZpMnFtaWF5aWNieTk3In0.ZjBs6memThbaHL0kN9OV5w', {
          attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
          maxZoom: 18,
          // id: 'mapbox.light',
          // id: 'mapbox.streets',
          id: 'mapbox.mapbox-streets-v7',
          // id: 'mapbox.dark',
          accessToken: 'pk.eyJ1IjoicGlzZXdpcCIsImEiOiJjajlyOGptOTQycjZpMnFtaWF5aWNieTk3In0.ZjBs6memThbaHL0kN9OV5w'
      }).addTo(map);

      var yellowIcon = new L.Icon({
      	iconUrl: './sites/all/modules/iubilantes/img/marker-icon-2x-yellow.png',
      	// shadowUrl: 'img/marker-shadow.png',
      	iconSize: [25, 41],
      	iconAnchor: [12, 41],
      	popupAnchor: [1, -34],
      	shadowSize: [41, 41]
      });

      L.marker([45.8095084, 9.0890482],{icon: yellowIcon}).addTo(map).bindPopup('Iubilantes Onlus');;
    }
  };
})(jQuery, Drupal);
