
function bodyScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $("#nav").addClass('attachTop');
    } else {
        $("#nav").removeClass('attachTop');
    }
}
window.onscroll = function (){
    bodyScroll();
};

$(document).ready(function (){
    $(`i`).mouseenter(function (){
        console.log(123);
        let current = $(this);
        $('i').each(function (index){
            $(this).addClass('hovered-icon');
            if (index == current.index())
            {
                return false;
            }
        });
    });
    $('i').mouseleave(function (){
        $('i').removeClass('hovered-icon');
    });
    $('i').click(function (){
        $('i').removeClass('clicked-icon');
        $('.hovered-text').addClass('clicked-icon');
    });
    $(".my-rating").starRating({
        starSize: 25,
        callback: function(currentRating, $el){
            // make a server call here
        }
    });

});
