import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// scrolling animation
gsap.to(".project-container", {
    yPercent: 10,
    scrollTrigger: {
        trigger: '#about-me-section',
        start: 'top bottom',
        end: 'top top',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.from("#about-me-header", {
    xPercent: -20,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about-me-section',
        start: 'top bottom',
        end: 'top top',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.from("#about-me", {
    yPercent: 20,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about-me-section',
        start: 'top bottom',
        end: 'top top',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.from("#about-profile-picture", {
    xPercent: 20,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about-me-section',
        start: 'top bottom',
        end: 'top top',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.to("#about-profile-picture", {
    backgroundPosition: "50% 40%",
    scrollTrigger: {
        trigger: '#about-me',
        start: 'top center',
        end: '+=50%',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.from("#about-me-outside h2", {
    xPercent: 20,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about-me-outside',
        start: 'top bottom',
        end: '+=50%',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.from("#about-me-outside-image", {
    yPercent: 20,
    opacity: 0,
    scrollTrigger: {
        trigger: '#about-me-outside',
        start: 'top bottom',
        end: '+=50%',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})

gsap.to("#about-me-outside-image", {
    backgroundPosition: "50% 0",
    scrollTrigger: {
        trigger: '#about-me-outside',
        start: 'center center',
        end: '+=30%',
        ease: 'circ',
        scrub: true,
        toggleActions: 'play pause reverse reverse'
    }
})