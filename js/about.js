$(document).ready(function () {
    AOS.init();
    function skill(id, percent) {
        let circle = new ProgressBar.Circle(id, {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#80cdda',
            trailColor: '#fff',
            trailWidth: 4,
            svgStyle: null
        });
        circle.animate(percent);
    }
    // console.log($('.intro2').offset().top)
    let progressOn = false;
    $(window).scroll(function(){
        console.log($('html,body').scrollTop())
        if($('html,body').scrollTop() > $('.intro2').offset().top && progressOn==false){
            progressOn = true;
            if(progressOn){
               skill("#ps", 0.9)
               skill("#ai", 0.8)
               skill("#vs", 0.6)
            }
        }
    })
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
floatingObject('.drop1', 2, 35)
floatingObject('.drop2', .5, 30)
floatingObject('.drop3', .3, 25)
});