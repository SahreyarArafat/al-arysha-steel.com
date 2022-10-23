// ---------------------------------------------------------
/* The code below was written only for the HOME PAGE HEADER AUTOMATIC SCROLLING ANIMATION */

var line = $('.line');

var tl = new TimelineLite({
    onComplete: function () {
        tl.restart();
    },
});

TweenLite.defaultEase = Circ.easeInOut;

var time = 1;
var y = 500;

tl.add(
    TweenMax.staggerFromTo(
        line,
        time,
        {
            opacity: 0,
            y: y,
        },
        {
            opacity: 1,
            y: 0,
        },
        15
    )
).add(
    TweenMax.staggerTo(
        line,
        time,
        {
            delay: time,
            opacity: 0,
            y: -y,
        },
        15
    ),
    14
);

// ---------------------------------------------------------
/* The code below was written only for the parallax effect */

// var parallax_effect = document.querySelector('header');
// window.addEventListener('scroll', function () {
//     let position = window.pageYOffset;
//     parallax_effect.style.backgroundPositionY = `${position * 1}px`;
// });

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
/* The code below was written only for the ABOUT SECTION IMAGES ANIMATION */

const aboutContainer = document.querySelector('#about');
aboutContainer.addEventListener('mousemove', function (e) {
    const speed = 5;
    const x = (window.innerWidth - e.pageX * speed) / 200;
    const y = (window.innerHeight - e.pageY * speed) / 200;

    this.querySelector(
        '.about-image-container'
    ).style.transform = `translateX(${x}px) translateY(${y}px) `;
});

// ---------------------------------------------------------
/* The code below was written only for the COUNTER SECTION'S NUMBER COUNTING ANIMATION */

$('.number').counterUp({
    delay: 10,
    time: 1000,
});

// ---------------------------------------------------------
/* The code below was written only for the PROJECT SECTION TO SHOW EACH PROJECT INDIVIDUALLY */

let projectLinks = document.querySelectorAll('.project-link');
let projects = document.querySelectorAll('.project');
let projectsContainer = document.querySelector('.projects-container');
var projectLink = false;

projects.forEach((project) => {
    projectLinks.forEach((link) => {
        link.addEventListener('click', function () {
            projectLink = true;
            if (link.textContent == project.getAttribute('data-val')) {
                projectsContainer.classList.remove(
                    'projects-container-height_2-js'
                );
                projectsContainer.classList.add(
                    'projects-container-height_1-js'
                );
                project.classList.add('project-unclicked-anim-js');
                // setTimeout(() => {}, 800);
                setTimeout(() => {
                    project.classList.remove('project-height_2-js');
                    project.classList.add('project-height_1-js');
                    project.classList.remove('project-unclicked-anim-js');
                    project.classList.add('project-clicked-js');
                }, 1000);
            } else {
                project.classList.add('project-unclicked-anim-js');
            }
        });
    });
});

document
    .querySelector('.show-all-projects')
    .addEventListener('click', function () {
        if (projectLink == true) {
            projects.forEach((project) => {
                projectsContainer.classList.remove(
                    'projects-container-height_1-js'
                );
                projectsContainer.classList.add(
                    'projects-container-height_2-js'
                );
                project.classList.remove('project-height_1-js');
                project.classList.add('project-height_2-js');

                project.classList.add('project-unclicked-anim-js');
                setTimeout(() => {
                    project.classList.remove('project-clicked-js');
                    project.classList.remove('project-unclicked-anim-js');
                }, 1000);
            });
        }
        projectLink = false;
    });

// ---------------------------------------------------------
/* The code below was written only for the NAV & PROJECT SECTION'S SELECTED ITEM IDENTIFY */

$(document).on('click', '.nav-container li', function () {
    $(this).addClass('active-link').siblings().removeClass('active-link');
});

$(document).on('click', '.project-link-container ul li', function () {
    $(this).addClass('active-link').siblings().removeClass('active-link');
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
