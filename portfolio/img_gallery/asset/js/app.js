let i = 0;
let img = [];
let time = 2000;
let timer_on = 0;
let timeout;
//array
img[0] ='1.jpg';
img[1] ='2.jpg';
img[2] ='3.jpg';
img[3] ='1.jpg';
img[4] ='2.jpg';
img[5] ='3.jpg';
img[6] ='1.jpg';
img[7] ='2.jpg';
img[8] ='3.jpg';

let nextImg = ()=>{
    if (i < img.length -1){
        i++;
    }else {
        i = 0;
    }
    document.querySelector('.img').src = 'asset/img/' + img[i];
    makeDotActive();
};
let prevImg = ()=>{
    if (i < img.length -1){
        if ( i == 0){
            i = img.length -1;
        }
        else{
            i--;
        }
        document.querySelector('.img').src = 'asset/img/' + img[i];
        makeDotActive()
    }else {
        i--;
    }
    document.querySelector('.img').src = 'asset/img/' + img[i];
    makeDotActive()
};
let slideImg = ()=>{
  if (i < img.length -1){
   i++;
  }else {
      i = 0;
  }
  document.querySelector('.img').src = 'asset/img/' + img[i];
    makeDotActive()
    timeout = setTimeout(slideImg,time);
};
let dotChng = ()=>{
    let dotHtml ='';
    img.forEach((v, index)=>{
        dotHtml += '<div class="per-box" id="d'+index+'"></div>';
    });
    document.querySelector('.dots-box').innerHTML = dotHtml;
}
function makeDotActive () {
    document.querySelectorAll('.per-box').forEach((value => {
        value.classList.remove('active')
    }))
    document.getElementById('d' + i).classList.add('active')
}
document.onkeydown = (e)=>{
    if (e.keyCode == 39){
        nextImg();
    }else if (e.keyCode == 37){
        prevImg();
    }else if (e.keyCode == 32){
        if (timer_on == 0){
            stopCount();
        }
        else if (timer_on == 1){
            startCount();
        }
    }
    console.log(e.keyCode);
}
function startCount() {
    timer_on = 0;
    slideImg();
}
function stopCount() {
    clearTimeout(timeout);
    timer_on = 1;
}
document.querySelector('.img').src = 'asset/img/' + img[i];
setTimeout(slideImg,time);
dotChng();
makeDotActive();