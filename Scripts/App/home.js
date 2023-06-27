gsap.to(".hz-scrolling-text__item.left", {
    scrollTrigger: {
        trigger: ".hz-split-text",
        start: 'top bottom',
        scrub: true,
        markers: false,
    },
    x: -500,
    duration: 0.5,
});
gsap.to(".hz-scrolling-text__item.right", {
    scrollTrigger: {
        trigger: ".hz-split-text",
        start: 'top bottom',
        scrub: true,
        markers: false,
    },
    x: 500,
    duration: 0.5,
});

gsap.from(".hz-scrolling-text__item", 1.5,{
    scrollTrigger: {
        trigger: ".hz-split-text",
        start: 'top bottom',
        scrub: false,
        markers: false,
    },
    y: 200,
    opacity: 0,
    duration: 0.5,
    skewY: 10,
    ease: Elastic.easeOut.config(1, 0.75),
    stagger: {
      amount: 0.5
    }
});