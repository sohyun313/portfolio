$(function () {
    // 모바일 메인비주얼 영역 슬라이드 
    var swiper = new Swiper(".mb-visual", {
        autoplay: true,
        loop: true,
        speed: 1200,
        navigation: {
            nextEl: ".mb-bt-next",
            prevEl: ".mb-bt-prev",
        },
    });
    // 메인비주얼 영역 슬라이드 
    var swiper = new Swiper(".main-visual", {
        autoplay: true,
        loop: true,
        speed: 1200,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".bullets"
        },
    });
    // 메인 메뉴 영역 슬라이드
    var swiper = new Swiper(".swiper-menu", {
        loop: true,
        slidesPerView: 'auto',
        loopAdditionalSlides: 1,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });
    // 공지사항 영역 슬라이드 
    var swiper = new Swiper(".swiper-notice", {
        autoplay: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
    // 스크롤 시 header fade-in
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 102) {
            $(".header").removeClass("transparent");
            $(".header").addClass("down");
            $(".utils a").addClass("dark");
        } else {
            $(".header").removeClass("down");
            $(".header").addClass("transparent");
            $(".utils a").removeClass("dark");
        }
    })
    const btn_open = $(".btn-open")
    const btn_close = $(".btn-close")
    const delivery_popup = $(".main-delivery > div")

    btn_open.click(function (event) {
        $('.main-delivery').addClass('active')
        $('.main-delivery .icon').animate({ left: '80%' }, 1000, 'swing')
    })
    btn_close.click(() => {
        $('.main-delivery').removeClass('active')
        $('.main-delivery .icon').animate({ left: '0' }, 100)
    })

    const btn_toggle = $(".toggle")
    const gnb = $('.gnb-menu')
    const header = $('.header')
    const menu_mask = $('.menu-mask')

    btn_toggle.click(() => {
        btn_toggle.toggleClass('open')
        gnb.toggleClass('open')
        header.toggleClass('open')
        menu_mask.toggleClass('active')
    })
    menu_mask.click(() => {
        btn_toggle.toggleClass('open')
        gnb.toggleClass('open')
        header.toggleClass('open')
        menu_mask.toggleClass('active')
    })
    $('.menu-1').click(function () {
        $('.all').addClass('active')
        $('.burger').removeClass('active')
        $('.chicken').removeClass('active')
        $('.side').removeClass('active')
        $('.main-menu .controll').css('top', '28%')
        $('.main-menu .m-controll').css({'left':'11.5vw','width':'13vw'})
        $('.content .menu-1').addClass('clicked').siblings().removeClass('clicked')
    })
    $('.menu-2').click(function () {
        $('.all').removeClass('active')
        $('.burger').addClass('active')
        $('.chicken').removeClass('active')
        $('.side').removeClass('active')
        $('.main-menu .controll').css('top', '45%')
        $('.main-menu .m-controll').css({'left':'25vw','width':'18vw'})
        $('.content .menu-2').addClass('clicked').siblings().removeClass('clicked')
    })
    $('.menu-3').click(function () {
        $('.all').removeClass('active')
        $('.burger').removeClass('active')
        $('.chicken').addClass('active')
        $('.side').removeClass('active')
        $('.main-menu .controll').css('top', '62%')
        $('.main-menu .m-controll').css({'left':'44.5vw','width':'18vw'})
        $('.content .menu-3').addClass('clicked').siblings().removeClass('clicked')
    })
    $('.menu-4').click(function () {
        $('.all').removeClass('active')
        $('.burger').removeClass('active')
        $('.chicken').removeClass('active')
        $('.side').addClass('active')
        $('.main-menu .controll').css('top', '79%')
        $('.main-menu .m-controll').css({'left':'64vw','width':'21vw'})
        $('.content .menu-4').addClass('clicked').siblings().removeClass('clicked')
    })
});
