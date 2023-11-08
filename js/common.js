$(document).ready(function ($) {
    $(window).resize(function(){
        let windowWidth = window.innerWidth;
        if(windowWidth >= 768){
            mb_cover.fadeOut();
            mb_bt.removeClass('mb-bt-open');
            mb_nav.removeClass('mb-nav-open');
        }
    })
	$("body").css("display", "none");
	$("body").fadeIn(1000);
	$("a.transition").click(function (event) {
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);
	});
	function redirectPage() {
		window.location = linkLocation;
	}
    const mb_bt = $('.mb-bt')
    const mb_cover = $('.mb-cover')
    const mb_nav = $('.mb-nav')
    mb_bt.click(function(){
        mb_bt.toggleClass('mb-bt-open');
        mb_cover.fadeToggle();
        mb_nav.toggleClass('mb-nav-open');
    })
    mb_cover.click(function(){
        mb_cover.fadeOut();
        mb_bt.removeClass('mb-bt-open');
        mb_nav.removeClass('mb-nav-open');
    })
});