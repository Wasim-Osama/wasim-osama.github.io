function multiplicationTabGen() {
    let factor = document.getElementById('inputNumber').value;
    if (factor > 0){
        let ans;
        let htmlView = "";
        for (let i = 1 ;i <= 10; i++){
            ans= factor*1;
            htmlView += "<li>" + factor + " X " + i + "=" + ans + "</li>"
        }
        document.getElementById('answer').innerHTML = htmlView;
    }
}