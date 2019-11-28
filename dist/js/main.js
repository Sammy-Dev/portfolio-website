//select DOM items
const menuBtn = document.querySelector(".burgerButton");
const menu = document.querySelector(".theMenu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menuBranding");
const navItems = document.querySelectorAll(".nav-item");

//set Initial menu state
let showMenu = false; 
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add("close");
        menu.classList.add('show');
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));
        
        showMenu = true;
    }else{
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));
        showMenu = false;
    }
}



///////////////////////////////////////
var Clock;
var i = 1;

function Start(){
    Clock = setInterval(Animation, 500);
}

function Animation(){
    if(i == 0){
        document.getElementById("underScore").innerHTML = "_";
        i++;
    }else if(i == 1){
        document.getElementById("underScore").innerHTML = " ";
        i--;
    }
}

