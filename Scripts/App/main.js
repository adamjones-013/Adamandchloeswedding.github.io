//Initiate scroll trigger
// ----------------------------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();


//Initiate lenis scroll
// ----------------------------------------------------------------------------------
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


Splitting();

$('.accordion-block__head').on('click', function (e) {
    var target = e.currentTarget;
    $(target).parent('.accordion-block').toggleClass('open');
    $(target).siblings('.accordion-block__body').slideToggle();
});