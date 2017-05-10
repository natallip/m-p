// flip
let flip = function () {        
  
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

export {flip};