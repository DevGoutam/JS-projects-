var percent =document.querySelector('.percent');
var progress =document.querySelector('.progress');

var count =4;
var per =16;
var loading =setInterval(AnimationEffect, 50);
function AnimationEffect(){
    if(count == 100 && per == 400){
        percent.classList.add("text-blink")
        clearInterval(loading);
    }
    else{
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
        percent.textContent =count + '%';
    }
}
