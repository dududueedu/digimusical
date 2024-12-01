// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    const opClose = document.querySelectorAll('.op-close');
    if (opClose.length) {
        for (var i = 0; i < opClose.length; i++) {
            opClose[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    function checkOpen(){
        const data = new Date();
        return data.getHours() >= 8 && data.getHours() < 18;
    }

    function daySunday(){ //checking sunday
        const data = new Date();
        return data.getDay() == 0;
    }

    const divDateOpen = document.getElementById("div-date-open");

    if(checkOpen() && !daySunday()) {
        divDateOpen.classList.remove("bg-red-600");
        divDateOpen.classList.add("bg-green-600");
    }else{
        divDateOpen.classList.remove("bg-green-600");
        divDateOpen.classList.add("bg-red-600");
    }

    // tests
    // When the user scrolls down 50px from the top of the document, resize the header's font size
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
            document.getElementById("nav-header").style.background = "#18181b";
        }else{
            document.getElementById("nav-header").style.background = "transparent";
        }
    }
});