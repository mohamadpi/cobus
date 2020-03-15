// ########### navbar dropdown #############

var header = document.getElementById("header");
var textbox = document.getElementById("textbox");
var mdnav = document.getElementById("mdnav");
var main = document.getElementById("main");

function dropfunc(){
    if (mdnav.className === "md-nav"){
        mdnav.classList.add ("active");
        textbox.classList.add ("hide");
        main.style.display = "none"
        
    }else {
        mdnav.classList.remove ("active");
        textbox.classList.remove ("hide"); 
        main.style.display = "block"
    } 
}

// #############  remove navbar whene screen resized to bag screen 

window.addEventListener("resize", function() {
    if (window.innerWidth > 680) {
        mdnav.classList.remove ("active");
        textbox.classList.remove ("hide"); 
        main.style.display = "block"
    };
});

