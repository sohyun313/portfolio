$(document).ready(function () {
  // visual-area slide
  var swiper = new Swiper(".sw-visual", {
    autoplay: true,
    loop: true,
    speed: 1500,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });
  // review-area slide
  var swReview = new Swiper(".sw-review", {
    autoplay: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1050: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });
  // bestseller-area slide
  $('.bs_slider').bxSlider({
    speed: 500,
    infiniteloop: true,
    auto: true,
    slideWidth: 500,
    slideMargin: 15,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 3,
    pager: false,
    responsive: true,
    prevSelector: ".slider-controls .slider-prev",
    nextSelector: ".slider-controls .slider-next",
    onSlideBefore: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
      // console.log(currentSlideHtmlObject);
      let progressLength = (currentSlideHtmlObject + 1) * 20 + '%';
      $('.bestseller .progress span').css('max-width', 'calc(15px + ' + progressLength + ')')
    }
  })
  // sns-area slide
  $('.sns_slider').bxSlider({
    speed: 500,
    infiniteloop: true,
    slideWidth: 309,
    slideMargin: 30,
    minSlides: 1,
    maxSlides: 5,
    moveSlides: 1,
    pager: false,
    nextSelector: ".control .arrow-right",
  })
  // gotop button
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 500) {
      $('.gotop').fadeIn(300);
    } else {
      $('.gotop').fadeOut(300);
    }
  })
  $('.gotop').click(function (e) {
    e.preventDefault();
    $('html,body').stop().animate({ scrollTop: 0 }, 500)
  })
  // 스크롤 내리면 사라지는 것들
  $(window).scroll(function (e) {
    let st = $(this).scrollTop();
    if (st > 386) {
      $('#header').addClass('hide')
      $('.mb-bt').addClass('hide')
      $('.mb-bt').removeClass('mb-bt-open')
      $(".mb-nav").removeClass("mb-nav-open")
      $(".mb-menu-mask").removeClass("mb-menu-mask-active")
      $('.searchbar').fadeOut(300);
      $('.inner .gnb-utils .language').removeClass('open')
    } else {
      $('#header').removeClass('hide')
      $('.mb-bt').removeClass('hide')
    }
  })
  // language-list popup
  $('.language').click(() => {
    $('.language').toggleClass('open')
  })
  $('.lang-list li').mouseover(function () {
    $(this).siblings().removeClass('on')
    $(this).addClass('on')
  })
  // searchbar popup
  $('.search').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.searchbar').fadeToggle(300);
  })
  $('.searchbar').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
  })
  $('body').click(function (e) {
    e.stopPropagation();
    $('.searchbar').fadeOut(300);
  })
  $(window).resize(function(){
    let windowWidth = window.innerWidth;
    if(windowWidth<=768){
      $('.searchbar').css('display','none');
    }
    if(windowWidth>1050){
      $('.mb-bt').removeClass('mb-bt-open')
      $(".mb-nav").removeClass("mb-nav-open")
      $(".mb-menu-mask").removeClass("mb-menu-mask-active")
    }
  })
  // 모바일 메뉴
  $(".mb-bt").click(function (event) {
    event.preventDefault();
    let windowWidth = window.innerWidth;
    if(windowWidth>1050){
      return;
    }
    $('.mb-mainmenu > a').removeClass('m-mainmenu-active')
    mb_submenu.hide();
    mb_3depth.hide();
    $('.mb-bt').toggleClass("mb-bt-open")
    $(".mb-menu-mask").toggleClass("mb-menu-mask-active")
    $(".mb-nav").toggleClass("mb-nav-open")
  })

  $(".mb-menu-mask").click(function () {
    $(".mb-bt").toggleClass("mb-bt-open")
    $(".mb-nav").toggleClass("mb-nav-open")
    $(".mb-menu-mask").toggleClass("mb-menu-mask-active")
  })
  const mb_mainmenu = $(".mb-menu")
  const mb_submenu = $(".mb-submenu")
  const mb_3depth = $(".mb-3depth")
  const mb_Li = $(".mb-menu .mb-mainmenu")
  $.each(mb_Li,function(index,item){
    let mb_Li = $(this).find('> a')
    mb_Li.click(function(e){
      e.preventDefault();
      let temp = $(this).hasClass('m-mainmenu-active')
      if(temp){
        $(this).removeClass('m-mainmenu-active')
        $(this).next().stop().slideUp();
      }else{
        mb_mainmenu.removeClass('m-mainmenu-active')
        $(this).addClass('m-mainmenu-active')
        $('.mb_submenu > li').stop().slideUp();
        $(this).next().stop().slideDown();
      }
      mb_3depth.stop().slideUp();
    })
  })
  $.each(mb_submenu,function(index,item){
    let mSubmenuA = $(this).find('> li > a')
    mSubmenuA.click(function(e){
      let depth3 = $(this).next();
      if(depth3.length){
        e.preventDefault();
        let tempshow = depth3.css('display')
        if(tempshow == 'none'){
          mb_3depth.stop().slideUp();
          depth3.stop().slideDown();
        }else{
          depth3.stop().slideUp();
        }
      }
    })
  })
})