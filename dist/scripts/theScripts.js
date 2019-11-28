
var Clock;
var i = 1;

var menuCanvas = document.getElementById("theMenuCanvas");
menuCanvas.width = window.innerWidth;
menuCanvas.height = window.innerHeight;

function Start(){
    Clock = setInterval(Animation, 500);
}

function Animation(){
    if(i == 0){
        document.getElementById("underScore").style.color = "#222629";
        i++;
    }else if(i == 1){
        document.getElementById("underScore").style.color = "#86C232";
        i--;s
    }
}

function reloadPage(){
    window.open("file:///C:/Users/sammy/Desktop/total%20website/root1/index.html", "_self")
}
