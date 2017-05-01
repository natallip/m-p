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


