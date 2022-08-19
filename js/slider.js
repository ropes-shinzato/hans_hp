

$(function(){    
    $('.slide__list').slick({
        autoplay:true,//自動再生する
        autoplaySpeed:4000,//自動再生するスピード 4秒
        dots:true,//ドット部分を表示する
        centerMode: true,
        centerPadding:'25%',
        arrows:true,
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 768, // 399px以下のサイズに適用
              settings: {
                slidesToShow: 1,
                arrows:false,
              },
            },
          ],
    });
});