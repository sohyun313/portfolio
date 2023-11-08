$(document).ready(function () {
  $('.full-landing-image').ripples({
    resolution: 400,
    dropRadius: 30,
    perturbance: 0.04,
  });
  function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

  function floatingObject(selector, delay, size) {
    // gsap.to(요소, 시간, 옵션)
    gsap.to(selector, random(1.5, 2.5), {
      y: size,
      repeat: -1, // -1 무한반복
      yoyo: true, // 애니메이션 되돌아오기
      ease: Power1.easeInOut, // 타이밍함수
      delay: random(0, delay) // 지연시간
    })
  }
  floatingObject('.portfolio', 3, 30)
  floatingObject('.about', .8, 20)
  floatingObject('.contact', .5, 25)
});