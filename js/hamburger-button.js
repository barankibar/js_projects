let sideNav = document.getElementById("sideNav");
let button = document.getElementById("button");
let menu = document.getElementById("menu");

button.onclick = function(){
    if(sideNav.style.right == "0px"){
        sideNav.style.right = "-300px"
    }
    else{
        sideNav.style.right = "0px"
    }
    menu.style.transitionDuration = "1s";
}