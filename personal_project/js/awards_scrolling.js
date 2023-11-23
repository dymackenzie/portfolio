import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// scrolling animation
gsap.from("#awards-container h2", {
    opacity: 0,
    yPercent: 60,
    scrollTrigger: {
        trigger: '#awards-container',
        start: 'top bottom',
        end: '+=50%',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.from(".awards-blocks", {
    opacity: 0,
    scrollTrigger: {
        trigger: '#awards-container',
        start: 'top bottom',
        end: '+=50%',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.to(".awards-blocks", {
    xPercent: -80,
    scrollTrigger: {
        trigger: '#awards-container',
        start: 'bottom bottom',
        end: 'center top',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})