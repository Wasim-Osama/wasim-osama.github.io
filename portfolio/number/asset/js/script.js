
function finalCalculation(){
    let NUM1 = parseInt($('input[name="number1"]').val());
    let NUM2 = parseInt($('.number2').val());
    let ACTION = parseInt($('input[name="action"]:checked').val());

    if(ACTION === 1){
        listAllEvens(NUM1, NUM2);
    }
    else  if(ACTION === 2){
        listAllOdds(NUM1, NUM2);
    }


}


function listAllEvens(num1, num2){
    let data = [];
    for (let i=num1;i<=num2;i++){
        if((i % 2) === 0){
            data.push(i);
        }
    }
    $('.ans-box').html('<h1>'+data.join(', ')+'</h1>')
}

function listAllOdds(num1 ,num2){
    let data = [];
    for (let i=num1;i<=num2;i++){
        if (i % 2 !== 0){
            data.push(i);
        }
    }
    $('.ans-box').html('<h1>'+data.join(' , ')+'</h1>')
}
