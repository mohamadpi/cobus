// ########### navbar dropdown #############

var header = document.getElementById("header");
var textbox = document.getElementById("textbox");
var mdnav = document.getElementById("mdnav");

function dropfunc(){
    if (mdnav.className === "md-nav"){
        mdnav.classList.add ("active");
        textbox.classList.add ("hide");
        
    }else {
        mdnav.classList.remove ("active");
        textbox.classList.remove ("hide"); 
            

        

    } 
}

// #############  remove navbar whene screen resized to bag screen 

window.addEventListener("resize", function() {
    if (window.innerWidth > 680) {
        mdnav.classList.remove ("active");
        textbox.classList.remove ("hide"); 
    };
});

