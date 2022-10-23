// ---------------------------------------------------------
/* The code below was written only for the PAGE AUTOMATIC PRELOADING ANIMATION */

var preloader = document.querySelector('.preloader');
window.addEventListener('load', function () {
    preloader.parentElement.removeChild(preloader);
    document
        .querySelector('.preloader-overflow')
        .classList.remove('preloader-overflow');
});

// ---------------------------------------------------------
/* The code below was written only for the SMALL DEVICE NAV CONTROLLING */

const navbar = document.querySelector('nav');
const checkBox = document.getElementById('check');
const navBackground = document.querySelector('.nav-background');

var lastScrollTop = 0;
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < lastScrollTop) {
        navbar.classList.add('nav-background-color-js');
    } else {
        navbar.classList.remove('nav-background-color-js');
    }
    lastScrollTop = scrollTop;
});

function checkBoxFunction() {
    const whatsAppContainer = document.querySelector('#whatsApp-container');

    if (checkBox.checked == true) {
        navbar.classList.add('nav-background-color-js');
        navBackground.classList.add('nav-background-js');
        whatsAppContainer.style.zIndex = '1';
        document.body.style.overflowY = 'hidden';
        // console.log(`checked!`);
    } else {
        navbar.classList.remove('nav-background-color-js');
        navBackground.classList.remove('nav-background-js');
        whatsAppContainer.style.zIndex = '100000';
        document.body.style.overflowY = 'overlay';
        // console.log(`unchecked!`);
    }
}

const nav_btns = document.querySelectorAll('.nav-btn');

nav_btns.forEach((nav_btn) => {
    nav_btn.addEventListener('click', function () {
        setTimeout(() => {
            checkBox.checked = false;
            navbar.classList.remove('nav-background-color-js');
            navBackground.classList.remove('nav-background-js');
            whatsAppContainer.style.zIndex = '100000';
            document.body.style.overflowY = 'overlay';
        }, 500);
    });
});

// ---------------------------------------------------------
/* The code below was written only for the WHATSAPP SECTION RULING  */

let whatsAppContainer = document.querySelector('#whatsApp-container');
let whatsAppChat = document.querySelector('.whatsApp-chat');
let whatsAppMainLogo = document.querySelector('.main-whatsApp-logo');
let openIcon = document.querySelector('#open-icon');
let openText = document.querySelector('#open-text');

whatsAppContainer.addEventListener('click', function () {
    whatsAppChat.style.transform = 'translateX(' + 0 + 'px)';
    whatsAppMainLogo.classList.add('display-none');
    whatsAppContainer.classList.replace('whatsApp-container', 'open-whatsApp');
    openIcon.classList.remove('display-none');
    openText.classList.remove('display-none');
});

let chatClose = document.querySelector('#close-chat');

chatClose.addEventListener('click', function () {
    whatsAppChat.style.transform = 'translateX(' + -400 + 'px)';
    whatsAppMainLogo.classList.remove('display-none');
    whatsAppContainer.classList.replace('open-whatsApp', 'whatsApp-container');
    openIcon.classList.add('display-none');
    openText.classList.add('display-none');
});
