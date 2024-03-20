$(function () {
    setTimeout(function () {
        $('body').fadeIn(1500);
    }, 600);
});

$(window).scroll(function () {
    $('.none').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100 && $(this).hasClass('none')) {
            $(this).removeAttr('class');
            $(this).attr('class', 'slide');
        }
    });
    $('.thumb .white').each(function () {
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if ($(window).width() > 768 && scroll > elemPos - windowHeight + 100 && $(this).hasClass('white')) {
            $(this).removeAttr('class');
            $(this).attr('class', 'black');
        }
        if ($(window).width() < 768 && scroll > elemPos - windowHeight + 100 && $(this).hasClass('white')) {
            setTimeout(function () {
                $(this).removeAttr('class');
                $(this).attr('class', 'black');
            }, 200);
        }
    });
});
