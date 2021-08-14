let v = ['','','','','','','','',''];
let ticToe = "";
function tokaMaro(box){
    let checkBox = $('.box-'+box).html();
    console.log(checkBox);
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
function winnerChk(){
    if (v[0] !=='' && v[0] === v[1] && v[1] === v[2]){
        $('.win-overlay').css({
            'transform': 'translateY(0)',
            'transition' : '800ms'
        });
        $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[3] !=='' && v[3] === v[4] && v[4] === v[5]){
        $('.win-overlay').css({
            'transform': 'translateY(0)',
            'transition' : '800ms'
        });
         $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[6] !=='' && v[6] === v[7] && v[7] === v[8]){
        $('.win-overlay').css({
            'transform': 'translateY(0)',
            'transition' : '800ms'
        });
         $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[0] !=='' && v[0] === v[3] && v[3] === v[6]){
        $('.win-overlay').css({
            'transform': 'translateY(0)',
            'transition' : '800ms'
        });
         $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[1] !=='' && v[1] === v[4] && v[4] === v[7]){
        $('.win-overlay').css({
            'transform': 'translateY(0)',
            'transition' : '800ms'
        });
         $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[2] !=='' && v[2] === v[5] && v[5] === v[8]){
        $('.win-overlay').css({
            'transform': 'translateY(0)',
            'transition' : '800ms'
        });
         $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[0] !=='' && v[0] === v[4] && v[4] === v[8]){
        $('.win-overlay').css({
            'transform': 'translateY(0)',
            'transition' : '800ms'
        });
         $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[2] !=='' && v[2] === v[4] && v[4] === v[6]){
        $('.win-overlay').css({
            'transform': 'translateY(0)',
            'transition' : '800ms'
        });
         $('#win-msg').html(v[0] + ' ' + 'You Win' );
    }
    else if (v[0] !=='' && v[1] !=='' && v[2] !==''  && v[3] !==''  && v[4] !==''  && v[5] !=='' && v[6] !==''  && v[7] !==''  && v[8] !==''){
        $('.draw-overlay').css({
            'transform' : 'translateY(0)',
            'transition' : '800ms'
        });
    }
}