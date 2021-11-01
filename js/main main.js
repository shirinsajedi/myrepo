$(document).ready(function() {
    $(window).scroll(function() {
        var sticky = $('#header'),
            scroll = $(window).scrollTop();

        if (scroll >= 500) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    })
});