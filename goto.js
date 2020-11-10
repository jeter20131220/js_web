var prev = document.getElementById("slider-prev");
var next = document.getElementById("slider-next");

var items = document.getElementsByClassName("slider-item");

var index = 0;

// 按鈕函式:下一張
function btnNext(){
    index++;

    if (index == items.length) index = 0;

    showItem();
    reset()
    switchButton ();

}

function btnPrev(){
    index--;

    if (index == -1 ) index = items.length -1;
    showItem();
    reset()
    switchButton ();
}


next.onclick=btnNext;
prev.onclick=btnPrev;

function showItem (){
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove("slider-active");
        
    }

    items[index].classList.add("slider-active");   
}

var duration = document.getElementById("slider").getAttribute("data-slider-duration");
console.log(duration);

var auto = setInterval(btnNext,duration);

function reset(){
    clearInterval(auto);
    auto = setInterval(btnNext,duration);
}


var btns = document.getElementsByClassName("slider-buttons");

for (var i = 0; i < btns.length; i++) {

    btns[i].onclick=function(){
        index =this.getAttribute("data-slider-item") -1;
        showItem();
        reset()
        switchButton ();
    }
    
}

function switchButton (){
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.remove("slider-button-active");
        
    }

    btns[index].classList.add("slider-button-active");   
}
