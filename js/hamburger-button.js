let sideNav = document.getElementById("sideNav");
let button = document.getElementById("button");
let menu = document.getElementById("menu");

button.onclick = function(){
    if(sideNav.style.right == "0px"){
        sideNav.style.right = "-300px"
        button.style.right = "100px"
        menu.src = "/img/hamburger-button.png"
    }
    else{
        sideNav.style.right = "0px"
        button.style.right = "300px"
        menu.src = "/img/close.png"
    }
    menu.style.transitionDuration = "1s";
}