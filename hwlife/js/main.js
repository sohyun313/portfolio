$(document).ready(function () {
  $(window).resize(function () {
    let windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      mb_bt.removeClass('mb-bt-open')
      $('.mb-menu-mask').removeClass('mb-menu-mask-active')
      $('.mb-nav').removeClass('mb-nav-open')
    }
    if (windowWidth <= 768) {
      $('.searchbar').fadeOut();
      $('.all-menu-mask').removeClass('all-menu-mask-active')
      $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
    }
  })
  // 전체메뉴 팝업
  $('.bt-all-menu').click(function () {
    $('.all-menu-mask').addClass('all-menu-mask-active')
    $('.all-menu-wrapper').addClass('all-menu-wrapper-active')
  })
  $('.closebt').click(function () {
    $('.all-menu-mask').removeClass('all-menu-mask-active')
    $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
  })
  $('.all-menu-wrapper').click(function () {
    $('.all-menu-mask').removeClass('all-menu-mask-active')
    $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
  })
  // 모바일 버튼
  const mb_bt = $('.mb-bt')
  mb_bt.click(function (e) {
    let windowWidth = window.innerWidth;
    if (windowWidth > 768) {
      return;
    }
    $('.m-mainmenu >a').removeClass('m-mainmenu-active')
    mb_submenu.hide();
    mb_3depth.hide();
    e.preventDefault();
    mb_bt.toggleClass('mb-bt-open')
    $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
    $('.mb-nav').toggleClass('mb-nav-open')
  })
  $('.mb-menu-mask').click(function () {
    mb_bt.toggleClass('mb-bt-open')
    $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
    $('.mb-nav').toggleClass('mb-nav-open')
    $('.m-mainmenu >a').removeClass('m-mainmenu-active')
  })
  // 모바일 메뉴
  const mb_mainmenu = $('.mb-mainmenu')
  const mb_submenu = $('.mb-submenu')
  const mb_3depth = $('.mb-3depth')

  $.each(mb_mainmenu, function (index, item) {
    let mb_mainA = $(this).find('>a')
    mb_mainA.click(function (e) {
      e.preventDefault();
      let temp = $(this).hasClass('m-mainmenu-active')
      if (temp) {
        $(this).removeClass('m-mainmenu-active')
        $(this).nextAll().stop().slideUp();
      } else {
        $('.mb-main').removeClass('m-mainmenu-active')
        $(this).addClass('m-mainmenu-active')
        mb_submenu.stop().slideUp();
        $(this).nextAll().stop().slideDown();
      }
      mb_3depth.stop().slideUp();
    })
  })
  $.each(mb_submenu, function (index, item) {
    let mb_subA = $(this).find('>li>a')
    mb_subA.click(function (e) {
      let depth3 = $(this).next();
      if (depth3.length) {
        e.preventDefault();
        let tempShow = depth3.css('display')
        if (tempShow == 'none') {
          mb_3depth.stop().slideUp();
          depth3.stop().slideDown();
        } else {
          depth3.stop().slideUp();
        }
      }
    })
  })
  // 플로팅 배너
  let floatPosition = parseInt($(".floating-banner").css('top'))
  $(window).scroll(function () {
    let currentTop = $(window).scrollTop();
    let bannerTop = currentTop + floatPosition + "px";
    $(".floating-banner").css('top', bannerTop)
  })
  $(".fb-bottom a").click(function (e) {
    e.preventDefault();
    let sc_top = $(window).scrollTop();
    if (sc_top > 460) {
      $('html,body').stop().animate({ scrollTop: 0 }, 500)
    }
  })
  // 개인,기업
  $('.toggle .bt').click(function () {
    $(this).siblings().removeClass('clicked')
    $(this).addClass('clicked')
  })
  // 메뉴 영역
  const mainMenu = $('.gnb-main li')
  subMenu = $('.gnb-sub')

  $.each(mainMenu, function (index) {
    $(this).hover(function () {
      $(this).find(subMenu).stop().fadeIn();
      $(this).siblings().find(subMenu).stop().fadeOut();
      $('.searchbar').fadeOut();
    })
    mainMenu.mouseleave(function () {
      subMenu.stop().fadeOut();
    })
  })
  // 검색 영역
  $('.user .bt-search').click(function (e) {
    e.stopPropagation();
    $('.searchbar').fadeToggle();
  })
  $('.searchbar').click(function (e) {
    e.stopPropagation();
  })
  $('body').click(function (e) {
    e.stopPropagation();
    $('.searchbar').fadeOut();
  })
  // 비주얼 영역
  let sw_visual = new Swiper(".sw-visual", {
    autoplay: true,
    loop: true,
    speed: 2000,
    effect: "fade",
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  $('.visual .inner > a').click(() => {
    $('.visual .inner > a').toggleClass("bt-play");
    let temp = $('.visual .inner > a').hasClass("bt-play")
    if (temp) {
      sw_visual.autoplay.stop();
    } else {
      sw_visual.autoplay.start();
    }
  })
  // 퀵메뉴
  let swquick = new Swiper('.sw-quick', {
    slidesPerView: 3,
    loop: true,
    navigation: {
      prevEl: ".sw-quick-prev",
      nextEl: ".sw-quick-next",
    },
    breakpoints: {
      760: {
        slidesPerView: 4,
      },
      960: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 6,
      },
    }
  });
  // 상품 영역
  let mixer = mixitup('.mix-wrapper', {
    "animation": {
      "duration": 400,
      "nudge": false,
      "reverseOut": true,
      "effects": "fade translateY(20%)"
    }
  })
  const pdBt = $('.product .container button')
  $.each(pdBt, function (index, event) {
    $(this).click(function () {
      $(this).addClass('clicked')
      $(this).siblings().removeClass('clicked')
    })
  })
  // 푸터 영역
  $('.f-site > a').click((e) => {
    e.preventDefault();
    $('.footer-t .f-site .f-site-list').fadeIn();
  })
  $('.f-site-list').before().click(function () {
    $('.footer-t .f-site .f-site-list').fadeOut();
  })
})