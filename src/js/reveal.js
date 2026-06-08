
const rightHero = document.querySelector('.right-hero');
const leftHero = document.querySelector('.left-hero');

gsap.from(rightHero, {
    scrollTrigger: {
        trigger: rightHero,
        start: "top 80%", 
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    }, 
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
});

gsap.from(leftHero, {
    scrollTrigger: {
        trigger: leftHero,
        start: "top 80%", 
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    }, 
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
});