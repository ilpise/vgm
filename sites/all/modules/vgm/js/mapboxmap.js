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

      // Simple example
      // L.mapbox.accessToken = '<your access token here>';
      //   var map = L.mapbox.map('map', 'mapbox.streets') .setView([40, -74.50], 9);

      L.mapbox.accessToken = 'pk.eyJ1IjoicGlzZXdpcCIsImEiOiJjajlyOGptOTQycjZpMnFtaWF5aWNieTk3In0.ZjBs6memThbaHL0kN9OV5w';
      // L.mapbox.styleLayer('mapbox://styles/mapbox/light-v9');

      var map = L.mapbox.map('map', '', {
                scrollWheelZoom: true,
                minZoom: 1
            }).setView([45.8095388, 9.0886403], 17);

        var iubiIcon = new L.Icon({
            iconUrl: './sites/all/modules/iubilantes/img/iconIubi.png',
            iconSize: [42, 48],
            iconAnchor: [12, 41],
            popupAnchor: [9, -34],
            shadowSize: [41, 41]
        });

        L.mapbox.styleLayer('mapbox://styles/mapbox/light-v9').addTo(map);
      L.marker([45.8095084, 9.0890482],{icon:iubiIcon}).addTo(map).bindPopup('Iubilantes Onlus');
    }
  };
})(jQuery, Drupal);
