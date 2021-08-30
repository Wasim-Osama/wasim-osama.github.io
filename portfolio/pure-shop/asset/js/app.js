
function bodyScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $(".nav-scroller").addClass('attachTop');
        $(".toggle-nav").addClass('attachTop');
    } else {
        $(".nav-scroller").removeClass('attachTop');
        $(".toggle-nav").removeClass('attachTop');
    }
}
function toggleNav(){
    $('.side-bar').toggleClass('active');
}
window.onscroll = function (){
    bodyScroll();
};
