$(function () {
    $('.Main_slider').slick({

        autoplay: true,
        dots: false,
        arrows: false,
    })

    var swiper = new Swiper(".mySwiper", {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: false,
        // watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: false,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });




    // 팝업창 쿠키
    $('#FL').on('change', function () {
        var lik = $(this).val();
        lik && window.open(lik)
    })

    $('.to_top').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600)
    });


    $('.popup').on('wheel', function (e) {
        e.preventDefault();
    });

    $('.popup button').on('click', function () {
        $('.popup').hide();
    });

    var getCookie = $.cookie('popup');

    if (!getCookie) {
        $('.popup').show();
    }
    $('.popup input').on('change', function () {
        $.cookie('popup', 'value', { expires: 1 });
        $('.popup').hide();
    });


    // // pop up cookie

    // var date = new Date();
    // date.setTime(date.getTime() + 60 * 1000);

    // // console.log(date)
    // // console.log($.cookie('todayPopUp'));


    // var TCK = $.cookie('todayPopUp');
    // if (!TCK) {
    //     $('.today_pop').show();
    // }

    // $('#Today').on('change', function () {
    //     $.cookie('todayPopUp', '팝업쿠키', { expires: date });
    //     $('.today_pop').hide();
    //     //출처: https://offbyone.tistory.com/176 [쉬고 싶은 개발자:티스토리]
    // })



})