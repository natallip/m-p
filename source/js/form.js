//form 
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
        var form = $('#contact-form');
        var url = '../mail.php';
        console.log(1);

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
        var form = $('#login-form');
        var url = '../login.php';
        console.log(2);
       
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

export {sendForm};

