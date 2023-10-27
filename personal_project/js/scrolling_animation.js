import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from '@studio-freight/lenis';

gsap.registerPlugin(ScrollTrigger);

// scrolling animation
let toProjects = gsap.timeline({
    scrollTrigger: {
        trigger: '.projects',
        start: 'top bottom',
        end: '+=40% center',
        scrub: 1,
        markers: false,
        toggleActions: 'play pause reverse reverse'
    }
}).to('.animation', { xPercent: -280, yPercent: 270}, 0)
    .to('.animation', { scale: 1.3 }, 0)
    .to('.animation', { rotate: '480deg' }, 0)
    .from('.project-wrapper', { xPercent: 50 }, 0);

let showcaseProjects = gsap.timeline({
    scrollTrigger: {
        trigger: '.project-wrapper',
        pin: false,
        start: '+=80% center',
        end: 'bottom top',
        scrub: 2,
        markers: true,
        toggleActions: 'play pause reverse reverse'
    }
}).to('.animation', { xPercent: -10, yPercent: 400 }, 0)
    .to('.animation', { scale: 1.1 }, 0)
    .to('.animation', { rotate: '200deg' }, 0);

// animate title
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