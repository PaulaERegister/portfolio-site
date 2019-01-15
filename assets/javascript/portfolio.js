 $(function(){
    $("#header").load("nav.html");
    $("#footer-placeholder").load("footer.html");
    $(".technologies").each(function(index){
        $(this).css({
            'animation-delay' : 0.5*(1+index) + 's'
        });
    });
})
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function currentDiv(n) {
    showDivs(slideIndex = n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("carousel-image");
    var dots = document.getElementsByClassName("circle-selector");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("circle-selector-white", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += "circle-selector-white";
}
$(document).ready(function() {  
    var auto_slide = 1;  
    var hover_pause = 1; 
    var auto_slide_seconds = 5000;
    if(auto_slide == 1){    
        var timer = setInterval('showDivs(slideIndex+=1)', auto_slide_seconds);  
        $('#hidden_auto_slide_seconds').val(auto_slide_seconds);  
    }  
    if(hover_pause == 1){  
        $('#carousel').hover(function(){  
            clearInterval(timer)  
        },function(){  
            timer = setInterval('showDivs(slideIndex+=1)', auto_slide_seconds);  
        });  
    } 
});
let scrollpos = window.scrollY
const header = document.querySelector("nav")
const header_height = header.offsetHeight
var body = document.body,
html = document.documentElement;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var height = Math.max( body.scrollHeight, body.offsetHeight, 
                           html.clientHeight, html.scrollHeight, html.offsetHeight);
const add_class_on_scroll = () => {
    header.classList.add("fade-in");
    header.classList.remove('fade-out');
    header.classList.add("pin-to-top");
    header.classList.add("black-background")
}
const remove_class_on_scroll = () => {
    header.classList.remove("fade-in"); 
    header.classList.add("fade-out");
    header.classList.remove("black-background");
}
window.addEventListener('scroll', function() { 
    scrollpos = window.scrollY;
    if (scrollpos >= header_height) { 
        if (scrollpos >= height-windowHeight) {
            header.classList.add("fade-out")
            header.classList.remove("pin-to-top");
        }
        else {
            add_class_on_scroll();
        }
    }
    if(scrollpos < header_height) {
        remove_class_on_scroll();
    }
})