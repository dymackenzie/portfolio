import Lenis from '@studio-freight/lenis';

document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log('Found the worst element ever: ', el);
    }
});

// SMOOTH SCROLLING
const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// DROPDOWN MENU

const toggle = document.querySelector(".toggle_button")
const toggleIcon = document.querySelector(".toggle_button ion-icon")
const dropdown = document.querySelector(".dropdown_menu")

toggle.onclick = () => {
    dropdown.classList.toggle("open")
    const isOpen = dropdown.classList.contains("open")

    toggleIcon.name = isOpen ? "close-outline" : "menu-outline"
}

// CURSOR

// const cursorDot = document.querySelector(".cursor-dot");
// const cursorOutline = document.querySelector(".cursor-outline");

// const links = document.querySelectorAll("nav ul li a");

// window.addEventListener("mousemove", function (e) {
//     const posX = e.clientX + 4;
//     const posY = e.clientY + 4;
//     cursorDot.style.left = posX + "px";
//     cursorDot.style.top = posY + "px";

//     cursorOutline.style.left = posX + "px";
//     cursorOutline.style.top = posY + "px";

// })

// links.forEach(link => {
//     link.addEventListener("mouseenter", () => {
//         cursorOutline.classList.add("large");
//     })
// })

// links.forEach(link => {
//     link.addEventListener("mouseleave", () => {
//         cursorOutline.classList.remove("large");
//     })
// })