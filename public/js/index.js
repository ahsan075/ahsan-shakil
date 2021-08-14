// ===VARIABLES===//

let bar = document.querySelector(".toggle-bar");
let toggle = document.querySelector(".navbar");
let menuName = document.querySelector(".menu1");
let first = document.querySelector(".openfirst");
let svg = document.querySelector("svg");
let span1 = document.querySelector(".span1");
let list = document.querySelectorAll(".list-item");
let menu = document.querySelector(".contain");
let listDiv = document.querySelector(".list");
let welcome = document.querySelector(".welcome");
let blink = document.querySelector(".blink");
let welcome1 = document.querySelector(".welcome1");
let welcome2 = document.querySelector(".welcome2");
let sectionAbout = document.querySelector(".aboutSection");
let image = document.querySelector(".fig");
let section1 = document.querySelector(".main_header");
let section2 = document.querySelector(".section2");
let card = document.querySelectorAll(".card");
let skillHeading = document.querySelector(".skillHeading");
let skillh1 = document.querySelector("#skill-h1");
let result = false;
let aboutbox = document.querySelector(".aboutBox");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let about = document.querySelector("#about");
let aboutBox = document.querySelector(".aboutBox");
let aboutpara = document.querySelector(".aboutpara");
let aboutMainPara = document.querySelector(".aboutparaMain");
const arrowClick = document.querySelector(".nav__arrow");
const expend__toggle = document.querySelector(".expend__toggle");

// === TOGGOLE BAR CLICKING EVENTS ===//

bar.addEventListener("click", function () {
    toggle.classList.remove("closeup");
    this.parentElement.classList.toggle("contain__New");
    if (!result) {
        menu.classList.remove("menuActive");
        bar.classList.add("open");
        bar.classList.remove("close");
        menuName.innerText = "CLOSE";
        toggle.classList.add("openup");
        svg.classList.add("svgup");
        span1.classList.add("span1up");
        list.forEach((e) => {
            e.addEventListener("click", function () {
                list.forEach((li) => li.classList.remove("active"));
                this.classList.add("active");
            });
        });
        result = true;
    } else {
        if (window.scrollY > 0) {
            menu.classList.add("menuActive");
        }
        toggle.classList.remove("openup");
        bar.classList.remove("open");
        bar.classList.add("close");
        menuName.innerText = "MENU";
        svg.classList.remove("svgup");
        span1.classList.remove("span1up");
        result = false;
    }
});

// === WELCOME ANIMATION ===//

section1.style.display = "none";

setTimeout(() => {
    welcome.style.width = "0%";
    menu.classList.remove("yes");
    blink.style.display = "none";
    welcome1.style.display = "none";
    welcome2.style.display = "none";
}, 2000);

setTimeout(() => {
    welcome.style.display = "none";
    section1.style.display = "flex";
}, 3000);

expend__toggle.addEventListener("click", () => {
    arrowClick.parentElement.parentElement.classList.toggle("nextNavbar");
    arrowClick.classList.toggle("nav__rotate");
    console.log("clicked");
});

window.addEventListener("scroll", function () {
    const window__position = window.scrollY > 0;
    menu.classList.toggle("scroll__active", window__position);
});
