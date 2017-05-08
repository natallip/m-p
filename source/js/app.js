import {preloader} from './preloader.js';
import {flip} from './flip.js';
import {moveLayers} from './parallaxIndex.js';
import {parallaxScroll} from './parallaxScroll.js';
import {hamburger} from './hamburger.js';
import {init} from './map.js';
import {slider} from './slider.js';
import {blur} from './blur.js';
import {scrollMenu} from './scrollMenu.js';
//import {sendContactForm} from './form.js';




if($(".preloader").length) { 
  preloader.init(); 
};

if($(".flipper").length) {  
    $('#btn').on('click', function (e) {
        e.preventDefault; 
        $('#myCard').addClass('flip');
        $(this).fadeOut(600);
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

// if ($('#contact-form').length) {
//     sendContactForm.init();
// };


let sendForm = (function () {

// Инициализирует модуль    
    var init = function (){
        _setUpListeners();
    };

// Прослушивает собития        
    var _setUpListeners = function (e) {
        //e.preventDefault();
        $('#contact-form').on('submit', _sendContactForm);
        $('#login-form').on('submit',  _sendLoginForm);

    };


// Работа с модальным окном
    var _showModal = function (answer) {
      //e.preventDefault();  
        var successBox = $('#success'),
            errorBox = $('#error');

        if(answer.status === 'success') {
            successBox.show();
                //console.log("ok");
        }else{
            errorBox.show();
        };

        $('.status-popup__close').on('click', function (e) {
            e.preventDefault; 
            $('.status-popup').hide();
        });
    };


//Отправка формы
    var _sendContactForm = function(e) {
        e.preventDefault();
        var form = $(this);
        var url = '../mail.php';

        var myServerGiveMeAnAnswer = _ajaxForm(form, url);

        myServerGiveMeAnAnswer.done(function(answer) {
            return _showModal(answer);
        });
        myServerGiveMeAnAnswer.fail(function(answer) {
            $('#error').text('На сервере произошла ошибка').show();
        });
    }; 

    var _sendLoginForm = function(e) {
        e.preventDefault();
        var form = $(this);
        var url = '../login.php';

        var myServerGiveMeAnAnswer = _ajaxForm(form, url);

        myServerGiveMeAnAnswer.done(function(answer) {
            return _showModal(answer);
        });
        myServerGiveMeAnAnswer.fail(function(answer) {
            $('#error').text('На сервере произошла ошибка').show();
        });
    }; 

// Универсальная функция
// 1. собирает данные из формы
// 2. проверяет форму
// 3. делает запрос на сервер и возвращает ответ с сервера    
    var _ajaxForm = function (form, url) {

        //if(!valid) return faulse;
        var formData = form.serialize();

        var result = $.ajax({
            url: url,
            type: 'POST',
            data: formData,
            //dataType = 'json',
        });
        return result;
        //console.log("result", "answer");
    };
       
    
// Возвращаем обьект (публичные методы)
    return {
        init: init
    };
})();
sendForm.init();
