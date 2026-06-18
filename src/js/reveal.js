const mainleft = document.querySelector('.main-left');
const mainright = document.querySelector('.main-right');
const rightHero = document.querySelector('.right-hero');
const leftHero = document.querySelector('.left-hero');
const carrousel = document.querySelector('.carrousel');
const navlinks = document.querySelector('.main-navlinks')
const hamburger = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); 
     if(hamburger.classList.contains('active')) {
        gsap.fromTo(navlinks, {
            filter: "blur(100px)",
            opacity: 0,
            y: 10,
        }, {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
        });
    } else {
        gsap.fromTo(navlinks, {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
        }, {
            filter: "blur(100px)",
            opacity: 0,
            y: 10,
        });
    }

});

gsap.fromTo(mainleft, {
    filter: "blur(10px)",
    opacity: 0,
    y: 50,
}, {
    filter: "blur(0px)",
    opacity: 1,
    y: 0,
})


gsap.from(carrousel, {
    scrollTrigger: {
        trigger: carrousel,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
    }, 
    filter: "blur(10px)",
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.5,
    duration: 1,
    ease: "expo"
});

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