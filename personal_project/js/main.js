import Lenis from '@studio-freight/lenis';

// document.querySelectorAll('*').forEach(el => {
//     if (el.offsetWidth > document.documentElement.offsetWidth) {
//         console.log('Found the worst element ever: ', el);
//     }
// });

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