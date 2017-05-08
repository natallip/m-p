// hamburger
let hamburger = function(){
  $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
 };


export {hamburger};

