    let scrollpos = window.scrollY
    const header = document.querySelector("nav")
    const header_height = header.offsetHeight
    var body = document.body,
    html = document.documentElement;
    var windowHeight = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;
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