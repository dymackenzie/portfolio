import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

// scrolling animation
gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        markers: false,
        toggleActions: 'play pause reverse reverse'
    }
}).to('.animation', { xPercent: -280, yPercent: 270}, 0)
    .to('.animation', { scale: 1.3 }, 0)
    .to('.animation', { rotate: '480deg' }, 0)
    .to('.title-wrapper', { yPercent: 10 }, 0)
    .to('.design-picture', { yPercent: 20 }, 0)
    .from('.project-wrapper', { xPercent: 50 }, 0)
    .to('.animation', { xPercent: -10, yPercent: 400 }, 1)
    .to('.animation', { scale: 1.1 }, 1)
    .to('.animation', { rotate: '200deg' }, 1);

/******************** Opening Script *******************/

gsap.from('.title', { y: '-100', ease: 'circ', duration: 2 });
gsap.from('.profile', { y: '-100', ease: 'circ', duration: 2 });
gsap.to('.title-wrapper', { opacity: 1, duration: 2 });
gsap.to('.header', { opacity: 1, duration: 2 });

gsap.set('.animation', { y:-10 })
gsap.timeline({repeat: -1}).to('.animation', {
    y: 10,
    ease: 'sine',
    duration: 2
}).to('.animation', {
    y: -10,
    ease: 'sine',
    duration: 2
})




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