gsap.from('.hero-text', {opacity: 0, duration: 2, y: 50, ease: 'Power2.easeInOut'});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.advantages',
        start: "center bottom",
        end: "center top"
    }
});

tl.from("img", {x: -200, opacity: 0, duration: 1.5})
    .from("#ptext", {y: -50, opacity: 0, duration: .3})
    .from("#titletext", {x: 100, opacity: 0, duration: .3}, "-=1")
    .from(".mini-container", {x: -100, opacity: 0, duration: .3}, "-=1")
    .from("form", {y: -100, opacity: 0, duration: 1}, "-=1")