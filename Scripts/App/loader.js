tl.from(".banner__swipe .cream", {
    x: "-100%",
    duration: 1,
    delay: 0.5,
    ease: Power2.easeOut,
});

tl.from(".banner__swipe .cream", {
    scaleX: "100%",
    duration: 1,
    ease: Power2.easeOut,
},"=-0.5");

tl.from(".banner__swipe .white", {
    scaleX: "100%",
    duration: 1,
    ease: Power2.easeOut,
},"=-0.7");


tl.from(".split-line .char", 2.5,{
    y: 200,
    opacity: 0,
    duration: 0.1,
    skewY: 10,
    ease: Elastic.easeOut.config(1, 0.75),
    stagger: {
      amount: 0.5
    }
},"=-0.2");

tl.from(".banner-hr", {
    duration: 1,
    scaleX: 0,
    stagger: 0.2,
    ease:"power1.out"
},"=-1");

tl.fromTo("html", 
    {
        overflow: "hidden",
        maxHeight: "100vh",
        height: "100vh",
        position: "fixed",
    }, 
    {
        maxHeight: "none",
        height: "auto",
        position: "initial",
    }
);

tl.from(".banner__bg", {
    opacity: 0,
    duration: 2,
    scale: 1.1,
    
},"=-1");

tl.to(".loader-nav.nav", {
    opacity: 1,
    duration: 0.5,
},"=-0.5");
tl.to(".loader-nav.mobile-nav", {
    opacity: 1,
    duration: 0.5,
},"=-0.5");

tl.to(".banner__inner", {
    color: "rgba(255,255,255)",
},"=-2");

tl.to(".banner__scroll", {
    opacity: 1,
},"=-1");



ScrollTrigger.matchMedia({
    // Mobile animation
    "(max-width: 1024px)": function() {
        gsap.to(".banner__bg", {
            scrollTrigger: {
                trigger: '#homeSection1',
                start: 'top bottom',
                scrub: true,
                markers: false,
              },
            //   scale: 0.8,
              y: 200,
              borderWidth: "25px",
        });
    },
    // Desktop animation 
    "(min-width: 1025px)": function() {
        gsap.to(".banner__bg", {
            scrollTrigger: {
                trigger: '#homeSection1',
                start: 'top bottom',
                scrub: true,
                markers: false,
              },
            //   scale: 0.8,
              y: 200,
              borderWidth: "150px",
        });
    }
});




// end -----------------------------------------------------

