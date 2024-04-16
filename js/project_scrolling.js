import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// scrolling animation
gsap.from("#decor-box1", {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.main',
        start: 'bottom bottom',
        end: 'bottom top',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.from("#decor-box2", {
    yPercent: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.main',
        start: 'bottom bottom',
        end: 'bottom top',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.from("#project-title", {
    xPercent: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: '.main',
        start: 'bottom bottom',
        end: 'bottom top',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.to(".project-container", {
    xPercent: -100,
    scrollTrigger: {
        trigger: '#projects-section',
        start: 'top top',
        end: '+=200%',
        pin: '#projects-section',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})