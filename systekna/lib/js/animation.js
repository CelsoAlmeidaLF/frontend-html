gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({delay: 2});

tl.from("#mainNav .navbar-brand",{ duration: 1.2 ,xPercent: -280 ,ease: "power2.out" ,opacity: 0 ,scale: 0.5  }, "+=0.5")
tl.from("#mainNav ul",{duration: 2 ,yPercent: -280 ,ease: "power2.out" ,opacity: 0 ,scale: 0.5 }, "+=0.5")

tl.restart();