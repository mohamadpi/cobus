// ########### navbar dropdown #############

var header = document.getElementById("header");
var textbox = document.getElementById("textbox");
var mdnav = document.getElementById("mdnav");
var main = document.getElementById("main");
var footer =  document.getElementById("footer");
var closer = document.getElementById("closer");
var bars = document.getElementById("bars");

function dropfunc(){
    if (mdnav.className === "md-nav"){
        mdnav.classList.add ("active");
        textbox.classList.add ("hide");
        bars.style.display = "none";
        closer.style.display = "block"
        main.style.display = "none"
        footer.style.display = "none"
        
    }else {
        mdnav.classList.remove ("active");
        textbox.classList.remove ("hide"); 
        bars.style.display = "block";
        closer.style.display = "none"
        main.style.display = "block"
        footer.style.display = "block"
    } 
}

// #############  remove navbar whene screen resized to bag screen 

window.addEventListener("resize", function() {
    if (window.innerWidth > 680) {
        mdnav.classList.remove ("active");
        textbox.classList.remove ("hide"); 
        bars.style.display = "block";
        closer.style.display = "none"
        main.style.display = "block"
        footer.style.display = "block"
    };
});

// ################### change active button 

var btngroup = document.getElementById("btn-group");
var btns = btngroup.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

// ############## change paragraph of the active button

function btn_1(){
    document.getElementById("current-content").innerHTML = "faucibus nisl tincidunt eget nullam non. Congue nisi vitae suscipit tellus mauris a. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Ut eu sem integer vitae justo. Risus nullam eget felis eget nunc lobortis mattis"

}

function btn_2(){
    document.getElementById("current-content").innerHTML = "In fermentum posuere urna nec tincidunt praesent. Iaculis urna id volutpat lacus. Elit at imperdiet dui accumsan"
    
}

function btn_3(){
    document.getElementById("current-content").innerHTML = "In fermentum posuere urna nec tincidunt praesent. Iaculis urna id volutpat lacus. Elit at imperdiet dui accumsanIn fermentum posuere urna nec tincidunt praesent. Iaculis urna id volutpat lacus. Elit at imperdiet dui accumsan"
}

