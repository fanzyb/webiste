$(".nav-item, .goTop").on("click", function (e) {
    let href = $(this).attr("href");
    let hrefElement = $(href);

    $("html, body").animate(
        {
            scrollTop: hrefElement.offset().top - 80,
        },
        1250,
        "easeInOutExpo"
    );

    e.preventDefault();
});




/** Navbar on scroll function */
window.onscroll = windowScroll;

function windowScroll(e) {    
    const navbar = document.querySelector(".navbar");
    const goTop = document.querySelector(".goTop");
    const navbarClass = "navbar navbar-expand-lg navbar-light fixed-top";
    const goTopClass = "goTop btn btn-secondary fixed-bottom mr-3 mb-3 ml-auto border-0";
    let offset = window.pageYOffset;

    if (offset > 70) {
        navbar.style.filter = "drop-shadow(0 6px 4px rgba(0, 0, 0, 0.1))";
        navbar.style.backgroundColor = "var(--background-secondary)";
        goTop.className = goTopClass;
    } else {
        navbar.style.filter = "";
        navbar.style.backgroundColor = "var(--background)";
        goTop.className = goTopClass + " d-none";
    }
}

// Script mengganti tema
const btnChangeTheme = document.querySelector(".btnChangeTheme");
const btnChangeThemeI = document.querySelector(".btnChangeTheme i");
const html = document.querySelector("html");
const hours = new Date().getHours();

btnChangeTheme.addEventListener("click", function(event) {
    if (html.dataset.colorMode === "light") {
        html.dataset.colorMode = "dark";
        btnChangeTheme.className = "btnChangeTheme btn btn-outline-light btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
        btnChangeThemeI.className = "fas fa-moon";
    } else {
        html.dataset.colorMode = "light";
        btnChangeTheme.className = "btnChangeTheme btn btn-outline-dark btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
        btnChangeThemeI.className = "far fa-moon";
    }
})

if (hours > 4 && hours < 16) {
    html.dataset.colorMode = "light";
    btnChangeTheme.className = "btnChangeTheme btn btn-outline-dark btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
    btnChangeThemeI.className = "far fa-moon";
} else {
    html.dataset.colorMode = "dark";
    btnChangeTheme.className = "btnChangeTheme btn btn-outline-light btn-sm border-0 ml-3 shadow-none d-block mx-auto mx-lg-0 nav-link"
    btnChangeThemeI.className = "fas fa-moon";
}

// Nav menu
function openNavMenu(x) {
    x.classList.toggle("change");
}

// Ganti style hamburger menu saat link navbar diklik
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        openNavMenu(navMenu);
    });
});


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Muhammad Irfan"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

// Typing Effect
function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
