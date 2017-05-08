// scrollMenu
// let scrollMenu = (function () {
//   var $article = $('.article'),
//     $item = $('.sidebar__item'),
//     $wrapMenu = $('.wrap-menu'),
//     body = document.body,
//     isPositionArticle = [],
//     offsetHeight = 200,
//     toggle = $('.sidebar__toggle'),

//     positionArticle = function (element) {
//       var len = element.length;
//       for (let i = 0; i < len; i++) {
//         isPositionArticle[i] = {};
//         isPositionArticle[i].top = element
//           .eq(i)
//           .offset()
//           .top - offsetHeight;
//         isPositionArticle[i].bottom = isPositionArticle[i].top + element
//           .eq(i)
//           .innerHeight();
//       }
//     },

//     scrollPageFixMenu = function (e) {
//       var scroll = window.pageYOffset;
//       if (scroll < $article.offset().top) {
//         $wrapMenu.removeClass('fixed');
//       } else {
//         $wrapMenu.addClass('fixed');
//       }
//     },

//     scrollPage = function (e) {
//       var scroll = window.pageYOffset;
//       for (let i = 0; i < isPositionArticle.length; i++) {
//         if (scroll >= isPositionArticle[i].top && scroll <= isPositionArticle[i].bottom) {
//           $item
//             .eq(i)
//             .addClass('sidebar__item--active')
//             .siblings()
//             .removeClass('sidebar__item--active');
//         }
//       }
//     },

//     clickOnMenu = function (e) {
//       var index = $(e.target).index();
//       var sectionOffset = $article
//         .eq(index)
//         .offset()
//         .top;


//       if ($wrapMenu.hasClass('fixed')) {
//           $('.sidebar__menu').show();
//           console.log(1);
//       };

//       $(document).off('scroll', scrollPage);
//       $('body, html').animate({
//         'scrollTop': sectionOffset
//       }, function () {
//         $(e.target)
//           .addClass('sidebar__item--active')
//           .siblings()
//           .removeClass('sidebar__item--active');
//         $(document).on('scroll', scrollPage);
//       });

//       if($wrapMenu.hasClass('overlay-sidebar')) {
        
//         $wrapMenu.animate({
//             'left' : -80 + '%'}, 300);
//         toggle.animate({
//             'left' : -10 + 'px'}, 300)
//         };

//     },
    
//     addListener = function () {
      
//       $('.sidebar__menu').on('click', clickOnMenu);

//       $(document).on('scroll', scrollPage);
//       $(document).on('scroll', scrollPageFixMenu);

//       $(window).on('load', function (e) {
//         positionArticle($article);
//       })

//       $(window).on('resize', function (e) {
//         positionArticle($article);
//       })

//     },

//     addListenerOnToggle = function () {
//         toggle.on('click', function () {
//             $wrapMenu.removeClass('fixed')
//             .addClass('overlay-sidebar')
//             .animate({
//             'left' : 0 + '%'}, 300);

//             $('.sidebar__menu').show();  
           
//         toggle.animate({
//             'left' : 79 + '%'}, 300)
//             });
       
//         $(document).on('click', function(e) {
//             if ($(e.target).closest('.overlay-sidebar').length) return;
//             $('.overlay-sidebar').animate({
//                 'left' : -80 + '%'}, 0);
               
                 
//             toggle.animate({
//                 'left' : -10 + 'px'}, 0);
//             e.stopPropagation();

//             $wrapMenu.removeClass('overlay-sidebar')
//             .addClass('fixed')
//             .animate({
//             'left' : 0 + '%'}, 300);

//             $('.sidebar__menu').hide();
                       
//             });

//     };


//   return {
//     init: addListener,
//     initToggle: addListenerOnToggle
//   }
// })();





let scrollMenu = (function () {
  var $article = $('.article'),
    $item = $('.sidebar__item'),
    $wrapMenu = $('.wrap-menu'),
    body = document.body,
    isPositionArticle = [],
    offsetHeight = 200,
    toggle = $('.sidebar__toggle'),

    positionArticle = function (element) {
      var len = element.length;
      for (let i = 0; i < len; i++) {
        isPositionArticle[i] = {};
        isPositionArticle[i].top = element
          .eq(i)
          .offset()
          .top - offsetHeight;
        isPositionArticle[i].bottom = isPositionArticle[i].top + element
          .eq(i)
          .innerHeight();
      }
    },

    scrollPageFixMenu = function (e) {
      var scroll = window.pageYOffset;
      if (scroll < $article.offset().top) {
        $wrapMenu.removeClass('fixed');
      } else {
        $wrapMenu.addClass('fixed');
      }
    },

    scrollPage = function (e) {
      var scroll = window.pageYOffset;
      for (let i = 0; i < isPositionArticle.length; i++) {
        if (scroll >= isPositionArticle[i].top && scroll <= isPositionArticle[i].bottom) {
          $item
            .eq(i)
            .addClass('sidebar__item--active')
            .siblings()
            .removeClass('sidebar__item--active');
        }
      }
    },

    clickOnMenu = function (e) {
      var index = $(e.target).index();
      var sectionOffset = $article
        .eq(index)
        .offset()
        .top;
      $(document).off('scroll', scrollPage);
      $('body, html').animate({
        'scrollTop': sectionOffset
      }, function () {
        $(e.target)
          .addClass('sidebar__item--active')
          .siblings()
          .removeClass('sidebar__item--active');
        $(document).on('scroll', scrollPage);
      });

      if($wrapMenu.hasClass('overlay-sidebar')) {
        
        $wrapMenu.animate({
            'left' : -80 + '%'}, 300);
        $('.sidebar__toggle').animate({
            'left' : -10 + 'px'}, 300)
        };
    },
    
    addListener = function () {
      $('.sidebar__menu').on('click', clickOnMenu);

      $(document).on('scroll', scrollPage);
      $(document).on('scroll', scrollPageFixMenu);

      $(window).on('load', function (e) {
        positionArticle($article);
      })

      $(window).on('resize', function (e) {
        positionArticle($article);
      })
    },

    addListenerOnToggle = function () {
        $('.sidebar__toggle').on('click', function () {
            $wrapMenu.removeClass('fixed')
            .addClass('overlay-sidebar')
            .animate({
            'left' : 0 + '%'}, 300);
           
        $('.sidebar__toggle').animate({
            'left' : 79 + '%'}, 300)
            });
       
        $(document).on('click', function(e) {
            if ($(e.target).closest('.overlay-sidebar').length) return;
            $('.overlay-sidebar').animate({
                'left' : -80 + '%'}, 300);
           
            $('.sidebar__toggle').animate({
                'left' : -10 + 'px'}, 300);
            e.stopPropagation();
            });
    }
  return {
    init: addListener,
    initToggle: addListenerOnToggle
  }
})();

export {scrollMenu};