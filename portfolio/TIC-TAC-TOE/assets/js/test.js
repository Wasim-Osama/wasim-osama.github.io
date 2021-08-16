let clickCheck = 0;
let v = ['','','','','','','','',''];
let ticToe = "";
function tokaMaro(box){
    let checkBox = $('.box-'+box).html();
    if (clickCheck === 0){
        if (checkBox === ""){
            if (ticToe === 'O'){
                $('.box-'+box).html('<div class="element cross">X</div>');
                ticToe = 'X';
                v[box] = ticToe;
            }
            else {
                $('.box-'+box).html('<div class="element zero">O</div>');
                ticToe ='O';
                v[box] = ticToe;
            }
        }
        winnerChk();
    }
}
function winnerChk(){
    clickCheck = 1;
    console.log(clickCheck);
    if (v[0] !=='' && v[0] === v[1] && v[1] === v[2]){
        $('.overlay').addClass('active');
        $('.overlay').css({'top': '0px','transition':'500ms'});
        $('.win-overlay').addClass('active');
        $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[3] !=='' && v[3] === v[4] && v[4] === v[5]){
        $('.overlay').addClass('active');
        $('.overlay').css({'top': '0px','transition':'500ms'});
        $('.overlay').css({'top': '0px','transition':'500ms'});
        $('.win-overlay').addClass('active');
        $('#win-msg').html(v[3] + ' ' + 'You Win' );
    }
    else if (v[6] !=='' && v[6] === v[7] && v[7] === v[8]){
        $('.overlay').addClass('active');
        $('.overlay').css({'top': '0px','transition':'500ms'});
        $('.win-overlay').addClass('active');
        $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[0] !=='' && v[0] === v[3] && v[3] === v[6]){
        $('.overlay').addClass('active');
        $('.overlay').css({'top': '0px','transition':'500ms'});
        $('.win-overlay').addClass('active');
        $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[1] !=='' && v[1] === v[4] && v[4] === v[7]){
        $('.overlay').addClass('active');
        $('.overlay').css({'top': '0px','transition':'500ms'});
        $('.win-overlay').addClass('active');
        $('#win-msg').html(v[1] + ' ' + 'You Win' );
    }
    else if (v[2] !=='' && v[2] === v[5] && v[5] === v[8]){
        $('.overlay').addClass('active');
        $('.overlay').css({'top': '0px','transition':'500ms'});
        $('.win-overlay').addClass('active');
        $('#win-msg').html(v[2] + ' ' + 'You Win' );
    }
    else if (v[0] !=='' && v[0] === v[4] && v[4] === v[8]){
        $('.overlay').addClass('active');
        $('.overlay').css({'top': '0px','transition':'500ms'});
        $('.win-overlay').addClass('active');
        $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[2] !=='' && v[2] === v[4] && v[4] === v[6]){
        $('.overlay').addClass('active');
        $('.overlay').css({'top': '0px','transition':'500ms'});
        $('.win-overlay').addClass('active');
        $('#win-msg').html(v[2] + ' ' + 'You Win' );
    }
    else if (v[0] !=='' && v[1] !=='' && v[2] !==''  && v[3] !==''  && v[4] !==''  && v[5] !=='' && v[6] !==''  && v[7] !==''  && v[8] !==''){
        $('.overlay').addClass('active');
        $('.overlay').css({'top': '0px','transition':'500ms'});
        $('.draw-overlay').addClass('active');
    }
    setTimeout(function (){
        clickCheck = 0;
    },200);

}
function replay(){
    v = ['','','','','','','','',''];
    ticToe = "";
    $('.box').html('');
    $('.overlay').removeClass('active');
    $('.overlay').css({'top': '-2000px','transition':'500ms'});
    $('.draw-overlay').removeClass('active');
    $('.win-overlay').removeClass('active');
}