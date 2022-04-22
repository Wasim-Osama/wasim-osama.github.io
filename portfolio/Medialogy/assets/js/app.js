$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1
    });
    $('.navbar-toggler').click(function (){
        $('#navbarSupportedContent').toggleClass('show')
    });
});