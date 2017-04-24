(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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


// yandex map
$(function () {
  ymaps.ready(init);
  var myMap;

  function init() {
    myMap = new ymaps.Map("map", {
      center: [53.67687364, 23.84455750],
      zoom: 15,
      controls: []
    });

    myMap.behaviors.disable('scrollZoom');
  }
});

// колонки одинаковой высоты
$(function () {

  function equalHeight(group) {
    var tallest = 0;
    group.each(function () {
      var thisHeight = $(this).height();
      if (thisHeight > tallest) {
        tallest = thisHeight;
      }
    });
    group.height(tallest);
  }

  $(document).ready(function () {
    equalHeight($(".about__column"));
  });
});

},{}]},{},[1])


//# sourceMappingURL=maps/app.js.map
