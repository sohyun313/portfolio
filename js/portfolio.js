$(document).ready(function () {
	$('.section-menu li').click(function (e) {
		$(this).addClass('on');
		$(this).siblings().removeClass('on');
	})
	const section = $("#fullpage > .section");

	let sectionSpeed = 500;
    // 각각의 섹션의 위치값 저장
    let sectionPos = [];
    let sectionIndex = 0;
    // 연속휠막기
    let scrolling = false;
	let wheeling = true;
	const sectionMenu = $(".section-menu");
    // 윈도우너비가 1000이하이면 fullpage모드 off
    // 윈도우너비가 1000초과이면 fullpage모드 on
	
    function wheelCheckFn() {
      let windowWidth = window.innerWidth;
      if (windowWidth <= 1000) {
        wheeling = false;
        sectionMenu.hide();
      } else {
        wheeling = true;
        sectionMenu.show();
      }
    }
	wheelCheckFn();
	function resetSection() {
		sectionPos = [];
		$.each(section, function (index, item) {
		  // 각각의 seciton의 위치값 구함
		  let tempY = $(this).offset().top;
		  // console.log(index + ":" +tempY)
		  tempY = Math.ceil(tempY);
		  sectionPos[index] = tempY;
		});
		// sectionPos[sectionPos.length] = Math.ceil(footer.offset().top);
	  }
	  // 최초에 새로고침 또는 실행시 위치값파악 =>sectionPos배열에 저장
	  resetSection();

	let sectionTotal = sectionPos.length;
  
    let resizeTimer;
    $(window).bind("resize", function () {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resizeFunction, 500);
    });
    function resizeFunction() {
      // 리사이즈시 실행할 코드
      wheelCheckFn();
      resetSection();
      if (wheeling) {
        // gsap.to($(요소명),durationTime,{설정})
        gsap.to($("html"), sectionSpeed / 1000, {
          scrollTop: sectionPos[sectionIndex],
          onComplete: function () {
            scrolling = false;
          },
        });
      }
    }
	// 마우스휠체크 및 섹션이동
    $(window).bind("mousewheel DOMMouseScroll", function (event) {
		let distance = event.originalEvent.wheelDelta;
		// 화면 사이즈에 따른 작동여부
		if (distance == null) {
		  distance = event.originalEvent.detail * -1;
		}
		if (wheeling != true) {
		  return;
		}
		// wheeling이 트루일때 연속휠 막아준다
		if (scrolling) {
		  return;
		}
	
		// 연속마우스휠작동 막기
		scrolling = true;
		if (distance < 0) {
		  sectionIndex++;
		  if (sectionIndex >= sectionTotal) {
			sectionIndex = sectionTotal - 1;
		  }
		} else {
		  sectionIndex--;
		  if (sectionIndex <= 0) {
			sectionIndex = 0;
		  }
		}
	
		gsap.to($("html"), sectionSpeed / 1000, {
		  scrollTop: sectionPos[sectionIndex],
		  onComplete: function () {
			scrolling = false;
		  },
		});
		sectionColor();
	});
	// 섹션메뉴클릭시 섹션이동
    const sectionLink = $(".section-menu li");
    $.each(sectionLink, function (index, item) {
      $(this).click(function () {
        moveSection(index);
        sectionColor();
      });
    });
  
    function moveSection(_index) {
      sectionIndex = _index;
      gsap.to($("html"), sectionSpeed / 1000, {
        scrollTo: sectionPos[sectionIndex],
        onComplete: function () {
          scrolling = false;
        },
      });
    }
    function sectionColor() {
      // 포커스 표현
      sectionLink.removeClass("on");
      sectionLink.eq(sectionIndex).addClass("on");
      // 색상 표현
      sectionLink.removeClass("on");
      sectionLink.eq(sectionIndex).addClass("on");
    }
    // 최초 또는 새로고침시 색상 셋팅
    sectionColor();

	$('#wave-1').wavify({
		height: 40,
		bones: 4,
		color: '#9ab6e0',
		amplitude: 40,
		speed: .25,
	});
	$('#wave-2').wavify({
		height: 40,
		bones: 4,
		color: '#8fd1eb',
		amplitude: 40,
		speed: .25,
	});
	$('#wave-3').wavify({
		height: 40,
		bones: 4,
		color: '#96d9e2',
		amplitude: 40,
		speed: .25,
	});
	$('#wave-4').wavify({
		height: 40,
		bones: 4,
		color: '#78c8e7',
		amplitude: 40,
		speed: .25,
	});
	$('#wave-5').wavify({
		height: 40,
		bones: 4,
		color: '#9ab6e0',
		amplitude: 40,
		speed: .25,
	});
	$('#wave-6').wavify({
		height: 40,
		bones: 4,
		color: '#8fd1eb',
		amplitude: 40,
		speed: .25,
	});
	$('#wave-7').wavify({
		height: 40,
		bones: 4,
		color: '#96d9e2',
		amplitude: 40,
		speed: .25,
	});
	// pop-up
	$('.section .bt-process').click(function () {
		$('.window').fadeIn();
		$('.window-content').slideDown();
		$('body').on('scroll touchmove mousewheel', function () {
			return false;
		});
	});
	$('.window-content i').click(function () {
		$('.window').fadeOut();
		$('.window-content').slideUp();
		$('.window-content').scrollTop(0);
		$('body').off('scroll touchmove mousewheel');
	});
	$('.window').click(function () {
		$('.window').fadeOut();
		$('.window-content').slideUp();
		$('.window-content').scrollTop(0);
		$('body').off('scroll touchmove mousewheel');
	});
	$('.st01 .bt-process').click(function () {
		$('.window-content img').attr('src', "images/process_sk2.png");
		$('.window-content').removeClass('event');
	})
	$('.st02 .bt-process').click(function () {
		$('.window-content img').attr('src', "images/process_hw.jpg");
		$('.window-content').removeClass('event');
	})
	$('.st04 .bt-process').click(function () {
		$('.window-content img').attr('src', "images/process_chijarmeck.jpg");
		$('.window-content').removeClass('event');
	})
	$('.st05 .bt-process').click(function () {
		$('.window-content img').attr('src', "images/process_shoko.jpg");
		$('.window-content').removeClass('event');
	})
	$('.st06 .bt-process').click(function () {
		$('.window-content img').attr('src', "images/process_mytable.png");
		$('.window-content').removeClass('event');
	})
	$('.st07 .bt-process').click(function () {
		$('.window-content img').attr('src', "images/eventpage_1124.png");
		$('.window-content').addClass('event');
	})
	let close = parseInt($('.window-content i').css('top'))
	$('.window-content').scroll(function(){
		$('.window-content i').css('top', close + $('.window-content').scrollTop() + "px")
	})
});