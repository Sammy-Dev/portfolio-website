
var Clock;
var i = 1;

function Start(){
    Clock = setInterval(Animation, 500);
}

function Animation(){
    if(i == 0){
        document.getElementById("underScore").style.color = "#222629";
        i++;
    }else if(i == 1){
        document.getElementById("underScore").style.color = "#86C232";
        i--;
    }
}

