export default ()=> {
    var bar = document.querySelector('.fa-bars');
    var close = document.querySelector('.site-nav .fa-times');
    var close1 = document.querySelector('.search .fa-times');
    var list = document.querySelector('.site-nav');
    var searchbtn = document.querySelector('.icons .fa-search');
    var search = document.querySelector('.search');
    var searchform = document.querySelector('#search');
    var header = document.querySelector('header');

    if(page)

    bar.addEventListener("click", function() {
        list.classList.add("active");
    });

    close.addEventListener("click", function() {
        list.classList.remove("active");
    });

    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            list.classList.remove("active");
        }
    });

    window.addEventListener("scroll", function() {
        list.classList.remove("active");

        if(window.scrollY > 0){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    });

    window.addEventListener("load", function() {
        if(window.scrollY > 0){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    });

    searchbtn.addEventListener("click", function() {
        search.classList.add("active");
        searchform.focus();
    });

    close1.addEventListener("click", function() {
        search.classList.remove("active");
    });
};