
// колонки одинаковой высоты
// $(function () {

// function equalHeight(group) {
//   var tallest = 0;
//   group.each(function() {
//     var thisHeight = $(this).height();
//     if(thisHeight > tallest) {
//       tallest = thisHeight;
//     }
//   });
//   group.height(tallest);
// }

// $(document).ready(function() {
//   equalHeight($(".about__column"));
// });

// });


// animation
 // (function () {      
 //  $('.section__user-block').slideDown(2000);
 // })();

// flip
(function () {        
  
$('#btn').on('click', function (e) {
    e.preventDefault; 
    $('#myCard').addClass('flip');
    $(this).fadeOut(600);
})
})();


// hamburger
(function(){
  $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
 })();


// parallax на главной странице по движению мышки
(function(){
    var parallaxContainer = document.getElementById('parallax'),
        layers = parallaxContainer.children;

var moveLayers = function (e) {
   // console.log(e);
    var initialX = (window.innerWidth / 2) - e.pageX,
        initialY = (window.innerHeight / 2) - e.pageY;

[].slice.call(layers).forEach(function (layer, i) {
console.log(layers);
    var divider = i/100,
        positionX = initialX * divider,
        positionY = initialY * divider,
        bottomPosition = (window.innerHeight / 2) * divider,
        layerStyle = layer.style,
        transformString = 'translate3d(' + positionX + 'px, ' + positionY + 'px, 0)';

 layerStyle.transform = transformString;
 layerStyle.bottom = '-' + bottomPosition + 'px';
});
}
window.addEventListener('mousemove', moveLayers);

})();



// parallax по скроллу
(function(){
 var parallax = function(){
    var bg = document.querySelector('.hero__bg');
    var user = document.querySelector('.user-block');
    var sectionText = document.querySelector('.section__title');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0, ' + strafe + ', 0)';
            var style = block.style;

            style.transform = transformString;
            style.webkitTransform = transformString;

        },
    init: function (wScroll) {
        this.move(bg, wScroll, 45);
        this.move(sectionText, wScroll, 20);
        this.move(user, wScroll, 3);
        }
    }
 }();

 window.onscroll = function () {
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);
 }

 })();    
 

// blur
(function() {
$(document).ready(function(){
  blur();
})
$(window).resize(function(){
  blur();
});

function blur() {
  var imgWidth = $('.blur__bg').width(),
      blurSection = $('.blur'),
      blur = $('.blur__form'),
      posY = blurSection.offset().top - blur.offset().top,   //текущее положение элемента относительно документа.
      posX = blurSection.offset().left - blur.offset().left;
  
  blur.css({
      'background-size': imgWidth + 'px' + ' ' + 'auto',
      'background-position': posX + 'px' + ' ' + posY + 'px'
  })
}
})();



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


// map
(function(){
google.maps.event.addDomListener(window, 'load', init);
    var map, markersArray = [];

    function bindInfoWindow(marker, map, location) {
        google.maps.event.addListener(marker, 'click', function() {
            function close(location) {
                location.ib.close();
                location.infoWindowVisible = false;
                location.ib = null;
            }

            if (location.infoWindowVisible === true) {
                close(location);
            } else {
                markersArray.forEach(function(loc, index){
                    if (loc.ib && loc.ib !== null) {
                        close(loc);
                    }
                });

                var boxText = document.createElement('div');
                boxText.style.cssText = 'background: #fff;';
                boxText.classList.add('md-whiteframe-2dp');

                function buildPieces(location, el, part, icon) {
                    if (location[part] === '') {
                        return '';
                    } else if (location.iw[part]) {
                        switch(el){
                            case 'photo':
                                if (location.photo){
                                    return '<div class="iw-photo" style="background-image: url(' + location.photo + ');"></div>';
                                 } else {
                                    return '';
                                }
                                break;
                            case 'iw-toolbar':
                                return '<div class="iw-toolbar"><h3 class="md-subhead">' + location.title + '</h3></div>';
                                break;
                            case 'div':
                                switch(part){
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
                                if (location.open_hours.length > 0){
                                    for (var i = 0; i < location.open_hours.length; ++i) {
                                        if (i !== 0){
                                            items += '<li><strong>' + location.open_hours[i].day + '</strong><strong>' + location.open_hours[i].hours +'</strong></li>';
                                        }
                                        var first = '<li><label for="cb_hours"><input type="checkbox" id="cb_hours"/><strong>' + location.open_hours[0].day + '</strong><strong>' + location.open_hours[0].hours +'</strong><i class="material-icons toggle-open-hours"><img src="//cdn.mapkit.io/v1/icons/keyboard_arrow_down.svg"/></i><ul>' + items + '</ul></label></li>';
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
                }

                boxText.innerHTML = 
                    buildPieces(location, 'photo', 'photo', '') +
                    buildPieces(location, 'iw-toolbar', 'title', '') +
                    buildPieces(location, 'div', 'address', 'location_on') +
                    buildPieces(location, 'div', 'web', 'public') +
                    buildPieces(location, 'div', 'email', 'email') +
                    buildPieces(location, 'div', 'tel', 'phone') +
                    buildPieces(location, 'div', 'int_tel', 'phone') +
                    buildPieces(location, 'open_hours', 'open_hours', 'access_time') +
                    buildPieces(location, 'div', 'desc', 'keyboard_arrow_down');

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
            draggable : true,
            clickableIcons: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill"},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#7dcdcd"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]}]
        }
        var mapElement = document.getElementById('map');
        var map = new google.maps.Map(mapElement, mapOptions);
        var locations = [
            {"title":"ул. Захарова 24","address":"ул. Захарова 24, Гродно, Беларусь","desc":"","tel":"","int_tel":"","email":"","web":"","web_formatted":"","open":"","time":"","lat":53.6757785,"lng":23.84433439999998,"vicinity":"Октябрьский район","open_hours":"","marker":{"url":"https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi_hdpi.png","scaledSize":{"width":25,"height":42,"j":"px","f":"px"},"origin":{"x":0,"y":0},"anchor":{"x":12,"y":42}},"iw":{"address":true,"desc":true,"email":true,"enable":true,"int_tel":true,"open":true,"open_hours":true,"photo":true,"tel":true,"title":true,"web":true}}
        ];
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

            if (locations[i].iw.enable === true){
                bindInfoWindow(marker, map, locations[i]);
            }
        }
    }
})();

