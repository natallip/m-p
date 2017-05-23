// tabs
let tabs = (function () {
   var init = function (){
        _setUpListeners();
    };
    var _setUpListeners = function (e) {
        //e.preventDefault();
    $('ul.tabs').on('click', 'li:not(.active)', function() {
        $(this)
        .addClass('tab--active').siblings().removeClass('tab--active')
        .closest('.admin__content').find('.item').removeClass('item--active').eq($(this).index()).addClass('item--active');
    });

    };
  
    return {
        init: init
    }; 

 
})();

export {tabs};