// Skew up ------------------------------------------------------------------
var skewup = gsap.utils.toArray("[data-animation-skewup]");

skewup.forEach((skewup) => {

    gsap.from(skewup, {
        scrollTrigger: {
            trigger: skewup,
            start: 'top 90%',
            scrub: false,
            markers: false,
        },
        y: 200,
        opacity: 0,
        duration: 1.5,
        skewY: 10,
        ease: Elastic.easeOut.config(0.75, 0.75),
    });
    
});

// Skew up with clip path ----------------------------------------------------
var skewupclip = gsap.utils.toArray("[data-animation-skewup-clip]");

skewupclip.forEach((skewupclip) => {

    gsap.from(skewupclip, {
        scrollTrigger: {
            trigger: skewupclip,
            start: 'top 90%',
            scrub: false,
            markers: false,
        },
        y: 200,
        "clip-path": "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
        opacity: 0,
        duration: 1.5,
        skewY: 10,
        ease: Elastic.easeOut.config(0.75, 0.75),
    });

});


// Parallax images -----------------------------------------------------------
gsap.utils.toArray(".img-wrapper").forEach(function (container) {
    let image = container.querySelector("img");

    gsap.from(image, {
        y: -200,
        ease: "none",
        scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
            markers: false,
            invalidateOnRefresh: true
        },
    });
});

// Content banner timeline -----------------------------------------------------------
tl.to(".content-banner__bg", {
    duration: 2,
    scale: 1.1,
    ease:"power1.out"
},"=-0.5");

tl.from(".content-banner .split-line .word", 2.5,{
    y: 200,
    opacity: 0,
    duration: 0.1,
    skewY: 10,
    ease: Elastic.easeOut.config(1, 0.75),
    stagger: {
      amount: 0.1
    }
},"=-1");

tl.from(".content-banner .banner-hr", {
    duration: 1,
    scaleX: 0,
    stagger: 0.2,
    ease:"power1.out"
},"=-1");