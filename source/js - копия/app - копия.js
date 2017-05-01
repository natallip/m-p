// (function () {
//   'use strict';
//   if (document.querySelector('.greating_picture')) {
//     setTimeout(function () {
//       document
//         .querySelector('.greating_picture')
//         .classList
//         .add('m--show');
//     }, 1000);
//   }

// })();

// // var module = require('./module');

// // module.func1();
// // module.func2();

// import {square, MyClass} from './module';

// console.log(square(5));
// var cred = {
//   name: 'Юрий Кучма',
//   enrollmentNo: 11115078
// };
// var x = new
// MyClass(cred);
// console.log(x.getName());


//yandex map
// $(function () {
//   ymaps.ready(init);
//     var myMap;

//     function init(){     
//         myMap = new ymaps.Map("map", {
//             center: [53.67539939, 23.83800462],
//             zoom: 16,
//             controls: []
//
//         });

//         myMap.behaviors.disable('scrollZoom');

//   var  myPlacemark = new ymaps.Placemark([55.75399400, 37.62209300], {
//             //draggable: false,
//             iconLayout: 'default#image',
//             iconImageHref: '../img/icons/svg/map_marker.svg',
//             iconImageSize: [46, 57],
//             iconImageOffset: [-26, -52]
//             });
            
//         myMap.geoObjects.add(myPlacemark);
//     }
// });

// колонки одинаковой высоты
$(function () {

function equalHeight(group) {
  var tallest = 0;
  group.each(function() {
    var thisHeight = $(this).height();
    if(thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}

$(document).ready(function() {
  equalHeight($(".about__column"));
});

});

//map
(function () {
  var map;
    function initMap() {
      var grodno = {lat: 53.676319, lng: 23.844500};
      var myAddress = {lat: 53.675779, lng: 23.844302};
          map = new google.maps.Map(document.getElementById('map'), {
          center: grodno,  
          zoom: 11,
          styles: [
    {  "featureType": "administrative",
        "elementType": "all",
        "stylers": [{"visibility": "on"},
            {"lightness": 33}]
    },
    {  "featureType": "landscape",
        "elementType": "all",
        "stylers": [{"color": "#f7f7f7"}]
    },
    {   "featureType": "poi.business",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
    },
    {   "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{"color": "#deecdb"}]
    },
    {   "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [{"visibility": "on"},
            {"lightness": "25"}]
    },
    {   "featureType": "road",
        "elementType": "all",
        "stylers": [{"lightness": "25"}]
    },
    {   "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{"visibility": "off"}]
    },
    {   "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{"color": "#ffffff"}]
    },
    {   "featureType": "road.highway",
        "elementType": "labels",
        "stylers": [{"saturation": "-90"},
            {"lightness": "25"}]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [{"visibility": "on"}]
    },
    {   "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{"color": "#ffffff"}]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{"color": "#ffffff"}]
    },
    {
        "featureType": "transit.line",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
    },
    {
        "featureType": "transit.station",
        "elementType": "all",
        "stylers": [{"visibility": "off"}]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{"visibility": "on"},
            {"color": "#e0f1f9"}]
    }
]
        });
      
  var marker = new google.maps.Marker({
      position: myAddress,
      map: map,
      title: 'Я здесь живу',
      icon: '../img/icons/svg/map_market.svg'
      });

 }
}());

// map
// (function () {
//   mapboxgl.accessToken = 'pk.eyJ1IjoibmF0YWxpYTg4OCIsImEiOiJjajF4enVrMzAwMGE3MnhycXZ0eGVhZjgyIn0.qJqbjoAt1AncKI9Sh7rRrw';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/light-v9',
// center: [53.67539939, 23.83800462], 
// zoom: 8, 
// scrollZoom: false
// });
// })();