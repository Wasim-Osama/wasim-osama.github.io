function bodyScroll(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $(".navScroller").addClass('attachTop');
    }
    else {
        $(".navScroller").removeClass('attachTop');
    }
}
window.onscroll = function (){
    console.log(123)
    bodyScroll();
}