/* 画面幅での画像の切り替え */

$(function() {
    var $setElem = $('.switch');
    var pcName = '-pc';
    var spName = '-sp';
    var replaceWidth = 767;

    function imageSwitch() {

        var windowWidth = parseInt($(window).width());

        $setElem.each(function() {
            var $this = $(this);

            if (windowWidth < replaceWidth) {
                $this.attr('src', $this.attr('src').replace(pcName, spName)).css({
                    visibility: 'visible'
                });
            } else {
                $this.attr('src', $this.attr('src').replace(spName, pcName)).css({
                    visibility: 'visible'
                });
            }
        });
    }
    imageSwitch();

// 動的なリサイズは操作後0.2秒経ってから処理を実行する。

    var resizeTimer;
    $(window).on('load resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            imageSwitch();
        }, 200);
    });
});





/* スマートフォン ハンバーガーメニュー*/

$(function () {
    var $body = $('body');
    var scrollpos;
    var SpsHeaderHeight = $('header').outerHeight();
    $('.js-header__nav-btn').on('click', function () {
        if (!$body.hasClass('is_menu_open')) {
            scrollpos = $(window).scrollTop();
            $('body').addClass('fixed').css({
                'top': -scrollpos
            });
            $('.header__sp__nav').slideDown('fast');
            $body.addClass('is_menu_open');
            $('#js_black_bg').addClass('is_menu_open');
        } else if ($body.hasClass('is_menu_open')) {
            $body.removeClass('is_menu_open').css({
                'top': 0
            });
            $body.removeClass('is_menu_open');
            window.scrollTo(0, scrollpos);
            $('.header__sp__nav').slideUp('fast');
            $('#js-black-bg').removeClass('is_menu_open');
        }
    });
    $('#js_black_bg').click(function () {
        $body.removeClass('is_menu_open');
        window.scrollTo(0, scrollpos);
        $('.header__sp__nav').slideUp('fast');
        $(this).toggleClass('is_menu_open');
    });
});



/*  ハンバーガーメニュー押下時スムーズスクロール */
$(function () {
    var $body = $('body');
    $('.menu_sp li a').click(function () {
        $body.removeClass('fixed');
        $body.removeClass('is_menu_open');
        $('.menu_sp').slideUp('fast');

    });
});

/* back-to-top */
$(function() {
    var w = $(window).width();
    $(window).on('scroll', function() {
        var now = $(window).scrollTop();
        if (now > 600) {
            $('.back-to-top__btn').fadeIn('fast');
        } else {
            $('.tback-to-top__btn').fadeOut('fast');
        }
    });

    $('.back-to-top__btn').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 'fast');
    });

});