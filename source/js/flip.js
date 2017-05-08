// flip
let flip = function () {        
  
$('#btn').on('click', function (e) {
    e.preventDefault; 
    $('#myCard').addClass('flip');
    $(this).fadeOut(600);
})
};

export {flip};