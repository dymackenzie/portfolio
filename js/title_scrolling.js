import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// scrolling animation
gsap.to("#title-container", {
    yPercent: 20,
    scrollTrigger: {
        trigger: '.main',
        start: 'bottom bottom',
        end: 'bottom top',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})