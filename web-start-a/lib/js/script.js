gsap.registerPlugin(ScrollTrigger);

// { repeat: 1 ,repeatDelay: 6 ,delay: 5 }
let tl = gsap.timeline({repeat: -1 ,repeatDelay: 30 ,delay: 5});

//  innerWidth * -1
tl.from(".um",{ duration: 1 ,yPercent: -180 ,ease: "power2.out" ,opacity: 0 ,scale: 0.5 }, "+=0.5" );
tl.from(".dois",{ duration: 1 ,yPercent: -180 ,ease: "power2.out" ,opacity: 0 ,scale: 0.5 }, "+=0.5" );
tl.from(".tres",{ duration: 1 ,xPercent: -180 ,ease: "power2.out" ,opacity: 0 ,scale: 0.5 }, "+=0.5" );
// let anime = gsap.from("#servicos", { duration: 1, x: innerWidth * -1 });

ScrollTrigger.create({
/*
    trigger: "#servicos",
    start:"top center",
    end: "bottom center",
    animation: tl,    
    toggleActions:"restart none restart pause",
*/
    // onEnter: () => console.log("enter"),
    // onLeaveBack: () => console.log("enter back"),
    // onLeave: () => console.log("leave"),
    // onEnterBack: () => console.log("leave back"),
    
    /* *** toggleActions ***
     * events: onEnter onLeave onEnterBack onEnterBack
     * options: play, pause, resume, reset, restart, complete, revere, none
     */

    // id:"section-servicos",
    // markers: true
});

const animation = tl;
animation.restart();