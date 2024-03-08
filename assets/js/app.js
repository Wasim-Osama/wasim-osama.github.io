let yearDoc = document.getElementById('year')
$(function (){
    $('#read-more-btn').click(function (){
        $('#read-more').slideToggle();
    })
})
function getYear(){

    let date  =  new Date();
    let year = '';
    year = date.getFullYear();
    yearDoc.innerHTML = year;
}
window.onload = () => {
    getYear();
}