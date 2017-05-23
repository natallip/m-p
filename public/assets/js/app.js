(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _preloader = require('./preloader.js');

var _flip = require('./flip.js');

var _parallaxIndex = require('./parallaxIndex.js');

var _parallaxScroll = require('./parallaxScroll.js');

var _hamburger = require('./hamburger.js');

var _map = require('./map.js');

var _slider = require('./slider.js');

var _blur = require('./blur.js');

var _scrollMenu = require('./scrollMenu.js');

var _prepareSend = require('./prepareSend');

var _prepareSend2 = _interopRequireDefault(_prepareSend);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if ($(".preloader").length) {
  _preloader.preloader.init();
};

if ($(".flipper").length) {
  $('#btn').on('click', function (e) {
    e.preventDefault;
    $('#myCard').removeClass('flip-back');
    $('#myCard').addClass('flip');
    $('.authorization').fadeOut(600);
    //console.log(1);
  });
  $('#btn--onmain').on('click', function (e) {
    e.preventDefault;
    $('#myCard').removeClass('flip');
    $('#myCard').addClass('flip-back');
    $('.authorization').fadeIn(600);
    //console.log(2);
  });
};

if ($(".parallax").length) {
  window.addEventListener('mousemove', _parallaxIndex.moveLayers);
};

if ($(".hero__bg").length) {};

if ($(".hamburger").length) {
  $('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
};

if ($("#map").length) {
  (0, _map.init)();
};

if ($(".slider").length) {};

if ($(".blur").length) {
  $(document).ready(function () {
    (0, _blur.blur)();
  });
  $(window).resize(function () {
    (0, _blur.blur)();
  });
};

if ($(".sidebar__menu").length) {
  _scrollMenu.scrollMenu.init();
  _scrollMenu.scrollMenu.initToggle();
};

var formMail = document.querySelector('#mail');
var formLogin = document.querySelector('#loginForm');

if (formMail) {
  formMail.addEventListener('submit', prepareSendMail);
}
if (formLogin) {
  formLogin.addEventListener('submit', prepareSendLogin);
}

function prepareSendMail(e) {
  e.preventDefault();
  var data = {
    name: formMail.name.value,
    email: formMail.email.value,
    text: formMail.text.value
  };
  (0, _prepareSend2.default)('/works', formMail, data);
}

function prepareSendLogin(e) {
  e.preventDefault();
  var data = {
    login: formLogin.login.value,
    password: formLogin.password.value
  };

  (0, _prepareSend2.default)('/login', formLogin, data, function (data) {
    if (data === 'Авторизация успешна!') {
      location.href = '/admin';
    }
  });
}

},{"./blur.js":2,"./flip.js":3,"./hamburger.js":4,"./map.js":5,"./parallaxIndex.js":6,"./parallaxScroll.js":7,"./preloader.js":8,"./prepareSend":9,"./scrollMenu.js":10,"./slider.js":12}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// blur
// let blur = function() {
// $(document).ready(function(){
//   blur();
// })
// $(window).resize(function(){
//   blur();
// });

function blur() {
    var imgWidth = $('.blur__bg').width(),
        blurSection = $('.blur'),
        blur = $('.blur__form'),
        posY = blurSection.offset().top - blur.offset().top,
        //текущее положение элемента относительно документа.
    posX = blurSection.offset().left - blur.offset().left;

    blur.css({
        'background-size': imgWidth + 'px' + ' ' + 'auto',
        'background-position': posX + 'px' + ' ' + posY + 'px'
    });
}
// };

exports.blur = blur;

// blur Владимир
// (function(){
//    var blur = (function () {
//        var wrapper = document.querySelector('.blur__form-wrapper');
//        var form = document.querySelector('.blur__form');

//    return {
//    set: function () {
//        var imgWidth = document.querySelector('.blur__bg').offsetWidth;
//        var posLeft = -wrapper.offsetLeft;
//        var posTop = -wrapper.offsetTop;
//        var blurCSS = form.style;

//    blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';
//    blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';
//        }
//    }
//    });

//    blur.set();

//    window.onscroll = function () {
//        var wScroll = window.pageYOffset;
//        parallax.init(wScroll);
//    }
//    window.onresize = function () {
//        blur.set();
//    }

// })();

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// flip
var flip = function flip() {

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

exports.flip = flip;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// hamburger
var hamburger = function hamburger() {
  $('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
};

exports.hamburger = hamburger;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// map
//let map = (function(){
// google.maps.event.addDomListener(window, 'load', init);

//     var map, markersArray = [];

function bindInfoWindow(marker, map, location) {
    google.maps.event.addDomListener(window, 'load', init);

    var map,
        markersArray = [];

    google.maps.event.addListener(marker, 'click', function () {
        function close(location) {
            location.ib.close();
            location.infoWindowVisible = false;
            location.ib = null;
        }

        if (location.infoWindowVisible === true) {
            close(location);
        } else {
            var buildPieces = function buildPieces(location, el, part, icon) {
                if (location[part] === '') {
                    return '';
                } else if (location.iw[part]) {
                    switch (el) {
                        case 'photo':
                            if (location.photo) {
                                return '<div class="iw-photo" style="background-image: url(' + location.photo + ');"></div>';
                            } else {
                                return '';
                            }
                            break;
                        case 'iw-toolbar':
                            return '<div class="iw-toolbar"><h3 class="md-subhead">' + location.title + '</h3></div>';
                            break;
                        case 'div':
                            switch (part) {
                                case 'email':
                                    return '<div class="iw-details"><i class="material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span><a href="mailto:' + location.email + '" target="_blank">' + location.email + '</a></span></div>';
                                    break;
                                case 'web':
                                    return '<div class="iw-details"><i class="material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span><a href="' + location.web + '" target="_blank">' + location.web_formatted + '</a></span></div>';
                                    break;
                                case 'desc':
                                    return '<label class="iw-desc" for="cb_details"><input type="checkbox" id="cb_details"/><h3 class="iw-x-details">Details</h3><i class="material-icons toggle-open-details"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><p class="iw-x-details">' + location.desc + '</p></label>';
                                    break;
                                default:
                                    return '<div class="iw-details"><i class="material-icons"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><span>' + location[part] + '</span></div>';
                                    break;
                            }
                            break;
                        case 'open_hours':
                            var items = '';
                            if (location.open_hours.length > 0) {
                                for (var i = 0; i < location.open_hours.length; ++i) {
                                    if (i !== 0) {
                                        items += '<li><strong>' + location.open_hours[i].day + '</strong><strong>' + location.open_hours[i].hours + '</strong></li>';
                                    }
                                    var first = '<li><label for="cb_hours"><input type="checkbox" id="cb_hours"/><strong>' + location.open_hours[0].day + '</strong><strong>' + location.open_hours[0].hours + '</strong><i class="material-icons toggle-open-hours"><img src="//cdn.mapkit.io/v1/icons/keyboard_arrow_down.svg"/></i><ul>' + items + '</ul></label></li>';
                                }
                                return '<div class="iw-list"><i class="material-icons first-material-icons" style="color:#4285f4;"><img src="//cdn.mapkit.io/v1/icons/' + icon + '.svg"/></i><ul>' + first + '</ul></div>';
                            } else {
                                return '';
                            }
                            break;
                    }
                } else {
                    return '';
                }
            };

            markersArray.forEach(function (loc, index) {
                if (loc.ib && loc.ib !== null) {
                    close(loc);
                }
            });

            var boxText = document.createElement('div');
            boxText.style.cssText = 'background: #fff;';
            boxText.classList.add('md-whiteframe-2dp');

            boxText.innerHTML = buildPieces(location, 'photo', 'photo', '') + buildPieces(location, 'iw-toolbar', 'title', '') + buildPieces(location, 'div', 'address', 'location_on') + buildPieces(location, 'div', 'web', 'public') + buildPieces(location, 'div', 'email', 'email') + buildPieces(location, 'div', 'tel', 'phone') + buildPieces(location, 'div', 'int_tel', 'phone') + buildPieces(location, 'open_hours', 'open_hours', 'access_time') + buildPieces(location, 'div', 'desc', 'keyboard_arrow_down');

            var myOptions = {
                alignBottom: true,
                content: boxText,
                disableAutoPan: true,
                maxWidth: 0,
                pixelOffset: new google.maps.Size(-140, -40),
                zIndex: null,
                boxStyle: {
                    opacity: 1,
                    width: '280px'
                },
                closeBoxMargin: '0px 0px 0px 0px',
                infoBoxClearance: new google.maps.Size(1, 1),
                isHidden: false,
                pane: 'floatPane',
                enableEventPropagation: false
            };

            location.ib = new InfoBox(myOptions);
            location.ib.open(map, marker);
            location.infoWindowVisible = true;
        }
    });
}

function init() {
    var mapOptions = {
        center: new google.maps.LatLng(53.675779, 23.844302),
        zoom: 18,
        gestureHandling: 'auto',
        fullscreenControl: false,
        zoomControl: false,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        scaleControl: true,
        scrollwheel: false,
        streetViewControl: true,
        draggable: true,
        clickableIcons: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#e0efef" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "hue": "#1900ff" }, { "color": "#c0e8e8" }] }, { "featureType": "landscape.man_made", "elementType": "geometry.fill" }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "stylers": [{ "color": "#7dcdcd" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [{ "title": "ул. Захарова 24", "address": "ул. Захарова 24, Гродно, Беларусь", "desc": "", "tel": "", "int_tel": "", "email": "", "web": "", "web_formatted": "", "open": "", "time": "", "lat": 53.6757785, "lng": 23.84433439999998, "vicinity": "Октябрьский район", "open_hours": "", "marker": { "url": "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi_hdpi.png", "scaledSize": { "width": 25, "height": 42, "j": "px", "f": "px" }, "origin": { "x": 0, "y": 0 }, "anchor": { "x": 12, "y": 42 } }, "iw": { "address": true, "desc": true, "email": true, "enable": true, "int_tel": true, "open": true, "open_hours": true, "photo": true, "tel": true, "title": true, "web": true } }];
    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            icon: locations[i].marker,
            position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
            map: map,
            title: locations[i].title,
            address: locations[i].address,
            desc: locations[i].desc,
            tel: locations[i].tel,
            int_tel: locations[i].int_tel,
            vicinity: locations[i].vicinity,
            open: locations[i].open,
            open_hours: locations[i].open_hours,
            photo: locations[i].photo,
            time: locations[i].time,
            email: locations[i].email,
            web: locations[i].web,
            iw: locations[i].iw
        });
        markersArray.push(marker);

        if (locations[i].iw.enable === true) {
            bindInfoWindow(marker, map, locations[i]);
        }
    }
}
// })();

exports.bindInfoWindow = bindInfoWindow;
exports.init = init;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// parallax на главной странице по движению мышки
//let parallaxIndex  = (function(){


var moveLayers = function moveLayers(e) {
    var parallaxContainer = document.getElementById('parallax'),
        layers = parallaxContainer.children;

    // console.log(e);
    var initialX = window.innerWidth / 2 - e.pageX,
        initialY = window.innerHeight / 2 - e.pageY;

    [].slice.call(layers).forEach(function (layer, i) {
        //console.log(layers);
        var divider = i / 100,
            positionX = initialX * divider,
            positionY = initialY * divider,
            bottomPosition = window.innerHeight / 2 * divider,
            layerStyle = layer.style,
            transformString = 'translate3d(' + positionX + 'px, ' + positionY + 'px, 0)';

        layerStyle.transform = transformString;
        layerStyle.bottom = '-' + bottomPosition + 'px';
    });
};
//window.addEventListener('mousemove', moveLayers);

//})();

exports.moveLayers = moveLayers;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// parallax по скроллу
var parallaxScroll = function () {
    var parallax = function () {
        var bg = document.querySelector('.hero__bg');
        var user = document.querySelector('.user-block');
        var sectionText = document.querySelector('.section__title');

        return {
            move: function move(block, windowScroll, strafeAmount) {
                var strafe = windowScroll / -strafeAmount + '%';
                var transformString = 'translate3d(0, ' + strafe + ', 0)';
                var style = block.style;

                style.transform = transformString;
                style.webkitTransform = transformString;
            },
            init: function init(wScroll) {
                this.move(bg, wScroll, 45);
                this.move(sectionText, wScroll, 20);
                this.move(user, wScroll, 3);
            }
        };
    }();

    window.onscroll = function () {
        var wScroll = window.pageYOffset;
        parallax.init(wScroll);
    };
}();

exports.parallaxScroll = parallaxScroll;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// preloader
var preloader = function () {
  var percentsTotal = 0,
      preloader = $('.preloader');

  var imgPath = $('*').map(function (ndx, element) {
    var background = $(element).css('background-image'),
        img = $(element).is('img'),
        path = '';

    if (background != 'none') {
      path = background.replace('url("', '').replace('")', '');
    }
    if (img) {
      path = $(element).attr('src');
    }
    if (path) return path;
  });

  var setPercents = function setPercents(total, current) {
    var persents = Math.ceil(current / total * 100);

    $('.preloader__percents').text(persents + '%');

    if (persents >= 100) {
      preloader.fadeOut();
    }
  };
  var loadImages = function loadImages(images) {
    if (!images.length) preloader.fadeOut();

    images.forEach(function (img, i, images) {
      var fakeImage = $('<img>', {
        attr: {
          src: img
        }
      });

      fakeImage.on('load error', function () {
        percentsTotal++;
        setPercents(images.length, percentsTotal);
      });
    });
  };
  return {
    init: function init() {
      var imgs = imgPath.toArray();
      loadImages(imgs);
    }
  };
  //preloader.init();
}();

exports.preloader = preloader;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prepareSend;

var _sendAjax = require('./sendAjax');

var _sendAjax2 = _interopRequireDefault(_sendAjax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function prepareSend(url, form, data, cb) {
  var resultContainer = form.querySelector('.status');
  resultContainer.innerHTML = 'Sending...';
  (0, _sendAjax2.default)(url, data, function (data) {
    //form.reset();
    resultContainer.innerHTML = data;
    if (cb) {
      cb(data);
    }
  });
}

},{"./sendAjax":11}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// scrollMenu
var scrollMenu = function () {
  var $article = $('.article'),
      $item = $('.sidebar__item'),
      $wrapMenu = $('.wrap-menu'),
      body = document.body,
      isPositionArticle = [],
      offsetHeight = 200,
      toggle = $('.sidebar__toggle'),
      positionArticle = function positionArticle(element) {
    var len = element.length;
    for (var i = 0; i < len; i++) {
      isPositionArticle[i] = {};
      isPositionArticle[i].top = element.eq(i).offset().top - offsetHeight;
      isPositionArticle[i].bottom = isPositionArticle[i].top + element.eq(i).innerHeight();
    }
  },
      scrollPageFixMenu = function scrollPageFixMenu(e) {
    var scroll = window.pageYOffset;
    if (scroll < $article.offset().top) {
      $wrapMenu.removeClass('fixed');
    } else {
      $wrapMenu.addClass('fixed');
    }
  },
      scrollPage = function scrollPage(e) {
    var scroll = window.pageYOffset;
    for (var i = 0; i < isPositionArticle.length; i++) {
      if (scroll >= isPositionArticle[i].top && scroll <= isPositionArticle[i].bottom) {
        $item.eq(i).addClass('sidebar__item--active').siblings().removeClass('sidebar__item--active');
      }
    }
  },
      clickOnMenu = function clickOnMenu(e) {
    var index = $(e.target).index();
    var sectionOffset = $article.eq(index).offset().top;
    $(document).off('scroll', scrollPage);
    $('body, html').animate({
      'scrollTop': sectionOffset
    }, function () {
      $(e.target).addClass('sidebar__item--active').siblings().removeClass('sidebar__item--active');
      $(document).on('scroll', scrollPage);
    });

    if ($wrapMenu.hasClass('overlay-sidebar')) {

      $wrapMenu.animate({
        'left': -80 + '%' }, 300);
      $('.sidebar__toggle').animate({
        'left': -10 + 'px' }, 300);
    };
  },
      addListener = function addListener() {
    $('.sidebar__menu').on('click', clickOnMenu);

    $(document).on('scroll', scrollPage);
    $(document).on('scroll', scrollPageFixMenu);

    $(window).on('load', function (e) {
      positionArticle($article);
    });

    $(window).on('resize', function (e) {
      positionArticle($article);
    });
  },
      addListenerOnToggle = function addListenerOnToggle() {
    $('.sidebar__toggle').on('click', function () {
      $wrapMenu.removeClass('fixed').addClass('overlay-sidebar').animate({
        'left': 0 + '%' }, 300);

      $('.sidebar__toggle').animate({
        'left': 79 + '%' }, 300);
    });

    $(document).on('click', function (e) {
      if ($(e.target).closest('.overlay-sidebar').length) return;
      $('.overlay-sidebar').animate({
        'left': -80 + '%' }, 300);

      $('.sidebar__toggle').animate({
        'left': -10 + 'px' }, 300);
      e.stopPropagation();
    });
  };
  return {
    init: addListener,
    initToggle: addListenerOnToggle
  };
}();

exports.scrollMenu = scrollMenu;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (url, data, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function (e) {
    var result = void 0;
    try {
      result = JSON.parse(xhr.responseText);
    } catch (e) {
      cb('Извините в данных ошибка');
    }
    cb(result.status);
  };
  xhr.send(JSON.stringify(data));
};

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// slider
var slider = function () {
    var coloringDots = function coloringDots(index) {
        $('.slider').find('.slider__dot-item').eq(index).addClass('active').siblings().removeClass('active');
    };

    var generateDots = function generateDots() {
        $('.slider__item').each(function () {
            var dot = $('<li>', {
                attr: {
                    class: 'slider__dot-item'
                },
                html: '<div class="slider__dot-circle"></div>'
            });

            $('.slider__dots').append(dot);
        });
    };
    generateDots();

    var moveSlide = function moveSlide(container, slideNum) {
        var items = container.find('.slider__item'),
            activeSlide = items.filter('.active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.slider__list'),
            duration = 500;

        if (!reqItem.length) return;

        list.animate({
            'left': -reqIndex * 100 + '%'
        }, duration, function () {
            activeSlide.removeClass('active');
            reqItem.addClass('active');
            coloringDots(slideNum);
        });
    };

    $('.slider__btn').on('click', function (e) {
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.slider'),
            items = $('.slider__item', container),
            activeItem = items.filter('.active'),
            existedItem,
            edgeItem,
            reqItem;

        if ($this.hasClass('slider__btn--next')) {
            // вперед
            existedItem = activeItem.next();
            edgeItem = items.first();
        }

        if ($this.hasClass('slider__btn--prev')) {
            // назад
            existedItem = activeItem.prev();
            edgeItem = items.last();
        }
        reqItem = existedItem.length ? existedItem.index() : edgeItem.index();
        moveSlide(container, reqItem);
    });

    $('body').on('click', '.slider__dot-item', function () {

        var $this = $(this),
            container = $this.closest('.slider'),
            index = $this.index();

        moveSlide(container, index);
        coloringDots(index);
    });
}();

exports.slider = slider;

},{}]},{},[1])


//# sourceMappingURL=maps/app.js.map
