// slider
let slider = (function () {
    var coloringDots = function (index) {
        $('.slider')
            .find('.slider__dot-item')
            .eq(index)
            .addClass('active')
            .siblings()
            .removeClass('active');
    }

    var generateDots = function () {
        $('.slider__item').each(function () {
            var dot = $('<li>', {
                attr : {
                    class : 'slider__dot-item'
                },
                html : '<div class="slider__dot-circle"></div>'
            });

            $('.slider__dots').append(dot);
        })
    };
    generateDots();

    var moveSlide = function (container, slideNum) {
        var
            items = container.find('.slider__item'),
            activeSlide = items.filter('.active'),
            reqItem = items.eq(slideNum),
            reqIndex = reqItem.index(),
            list = container.find('.slider__list'),
            duration = 500;

        if (!reqItem.length) return;

        list.animate({
            'left' : -reqIndex * 100 + '%'
        }, duration, function () {
            activeSlide.removeClass('active');
            reqItem.addClass('active');
            coloringDots(slideNum);
        });
    }

    $('.slider__btn').on('click', function(e){
        e.preventDefault();

        var $this = $(this),
            container = $this.closest('.slider'),
            items = $('.slider__item', container),
            activeItem = items.filter('.active'),
            existedItem, edgeItem, reqItem;

        if ($this.hasClass('slider__btn--next')) { // вперед
            existedItem = activeItem.next();
            edgeItem = items.first();
        }

        if ($this.hasClass('slider__btn--prev')) { // назад
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
})();

export {slider};