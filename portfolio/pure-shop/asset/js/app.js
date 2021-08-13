
function bodyScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $(".nav-scroller").addClass('attachTop');
    } else {
        $(".nav-scroller").removeClass('attachTop');
    }
}
window.onscroll = function (){
    bodyScroll();
};
