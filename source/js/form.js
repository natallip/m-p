//form mail
$(function () {
    $('#order-form').on('submit', function (e) {
        e.preventDefault();

        var form = $(this),
            formData = form.serialize();


        $.ajax({
            url: '../mail.php',
            type: 'POST',
            data: formData,
            success: function (data) {
               
                var popup = data.status ? '#success' : '#error';
           
           
            $.fancybox.open([
                {src: popup}
                ], {
                    type: 'inline',
                    //maxWidth: 250,
                    fitToView: false,
                    //adding: 0,
                    afterClose : function () {
                      form.trigger('reset');
                    }
                 });
            }
        });
    });

    $('.status-popup_close').on('click', function (e) {
                e.preventDefault();
                $.fancybox.close();
            });
});

// //E-mail Ajax Send
//     $("form").submit(function() { //Change
//         var th = $(this);
//         $.ajax({
//             type: "POST",
//             url: "mail.php", //Change
//             data: th.serialize()
//         }).done(function() {
//             alert("Thank you!");
//             setTimeout(function() {
//                 // Done Functions
//                 th.trigger("reset");
//             }, 1000);
//         });
//         return false;
//     });

// (function () {
//     $("#contact-form").submit(function () {
//         // Получение ID формы
//         var formID = $(this).attr('id');
//         // Добавление решётки к имени ID
//         var formNm = $('#' + formID);
//         var messageMy = $(formNm).find(".msgs"); // Ищет класс .msgs в текущей форме  и записываем в переменную
//         //var formTitle = $(formNm).find(".formTitle"); // Ищет класс .formtitle в текущей форме и записываем в переменную
//         $.ajax({
//             type: "POST",
//             url: '../mail.php',
//             data: formNm.serialize(),
//             success: function (data) {
//               // Вывод сообщения об успешной отправке
//               messageMy.html(data);
//               formTitle.css("display","none");
//               setTimeout(function(){
//                 //$(formNm).css("display","block");
//                 $('.formTitle').css("display","block");
//                 $('.msgs').html('');
//                 $('input').not(':input[type=submit], :input[type=hidden]').val('');
//               }, 3000);
//             },
//             error: function (jqXHR, text, error) {
//                 // Вывод сообщения об ошибке отправки
//                 messageMy.html(error);
//                 formTitle.css("display","none");
//                 // $(formNm).css("display","none");
//                 setTimeout(function(){
//                   //$(formNm).css("display","block");
//                   $('.formTitle').css("display","block");
//                   $('.msgs').html('');
//                   $('input').not(':input[type=submit], :input[type=hidden]').val('');
//                 }, 3000);
//             }
//         });
//         return false;
//     });
//     //для стилей формы
//       var $input = $('.form-fieldset > input');
//       $input.blur(function (e) {
//         $(this).toggleClass('filled', !!$(this).val());
//       });
// })();