import {preloader} from './preloader.js';
import {flip} from './flip.js';
import {moveLayers} from './parallaxIndex.js';
import {parallaxScroll} from './parallaxScroll.js';
import {hamburger} from './hamburger.js';
import {init} from './map.js';
import {slider} from './slider.js';
import {blur} from './blur.js';
import {scrollMenu} from './scrollMenu.js';
import {sendForm} from './form.js';




if($(".preloader").length) { 
  preloader.init(); 
};

if($(".flipper").length) {  
    $('#btn').on('click', function (e) {
        e.preventDefault; 
        $('#myCard').removeClass('flip-back');
        $('#myCard').addClass('flip');
        $('.authorization').fadeOut(600);
        
       
    });
    $('#btn--onmain').on('click', function (e) {
        e.preventDefault; 
        $('#myCard').removeClass('flip');
        $('#myCard').addClass('flip-back');
        $('.authorization').fadeIn(600);
        
       
    });
};

if($(".parallax").length) {  
  window.addEventListener('mousemove', moveLayers);
};

if($(".hero__bg").length) { 
};

if($(".hamburger").length) { 
  $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
};

if($("#map").length) {
  init();
};

if($(".slider").length) { 
};

if($(".blur").length) { 
    $(document).ready(function(){
        blur();
    })
    $(window).resize(function(){
        blur();
    });                                                        
};

if($(".sidebar__menu").length) {  
    scrollMenu.init();
    scrollMenu.initToggle();
};

if ($('.form').length) {
    sendForm.init();
};




