
function multiplicationTabGen() {
    let factor = document.getElementById('inputNumber').value;
    if (factor > 0){
        let ans;
        let htmlView = "";
        for (let i = 1;i <= 10; i++){
            ans = factor*i;
            htmlView += "<li>" + factor + " X " + i + "=" + ans + "</li>"
        }
        document.getElementById('answer').innerHTML = htmlView;
    }
}

window.onload = function (){
    let input = document.getElementById('inputNumber');
    input.addEventListener('keyup', function (e){

        // On ANy Type
        // ==========================
        multiplicationTabGen();


        // On Enter
        // ==========================
        // if(e.which == 13){
        //     multiplicationTabGen();
        // }
    })
}
