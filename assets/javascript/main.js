    $(function(){
        $("#header").load("nav.html");
        $("#footer-placeholder").load("footer.html");
    });
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    window.onload=function() {
        setTimeout(func1, 1000);
    };
    function func1()
    {
        document.getElementById("header-text").className="show";
    }
    $(document).ready(function() {
        $(window).scroll(function(){
            var h = $(".intro-slide").height() + $(".portfolio-image").height() + $(".portfolio-content").height() + $(".slides").height() + $(".resume").height() + $(".head").height() - $(".content").height() - 200;
            document.getElementById("footer").style.marginTop = h+"px";
        });
        $(window).scroll( function(){
            $('.hideme').each( function(i){
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ){
                    $(this).animate({'opacity':'1'},1500);
                }
            });
        });
    });
    ScrollReveal().reveal('.intro');
    ScrollReveal().reveal('.headline');
    ScrollReveal().reveal('.intro-slide', {duration: 1000, distance: '110px', origin: 'left', reset: true});
    ScrollReveal().reveal('.intro-slide-interval', {duration: 1500, distance: '25%', origin: 'left', interval: 100, reset:true});    
    ScrollReveal().reveal('.see-more', {duration: 2000, distance: '50%', origin: 'bottom', reset:true});     
    ScrollReveal().reveal('.portfolio-interval', {duration: 1500, distance: '25%', origin: 'left', interval: 600, reset:true});      
    ScrollReveal().reveal('.skills-interval', {duration: 1500, distance: '50%', origin: 'top', interval: 600, reset:true, delay: 0}); 