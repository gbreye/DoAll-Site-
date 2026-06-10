
const rightHero = document.querySelector('.right-hero');
const leftHero = document.querySelector('.left-hero');
const carrousel = document.querySelector('.carrousel');

for(let i = 0; i < carrousel.children.length; i++) {
    gsap.from(carrousel.children[i], {
        scrollTrigger: {
            trigger: carrousel.children[i],
            start: "top 80%", 
            end: "bottom 20%",
            toggleActions: "play none none reverse",
        }, 
        opacity: 0,
        y: 50,
        delay: 0.5,
        duration: 1,
        ease: "power2.out"
    });
}
gsap.from(rightHero, {
    scrollTrigger: {
        trigger: rightHero,
        start: "top 80%", 
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    }, 
    opacity: 0,
    y: 50,
    delay: 0.5,
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
    delay: 0.5,
    duration: 1,
    ease: "power2.out"
});