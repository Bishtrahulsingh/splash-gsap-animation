let tl = gsap.timeline();

tl.from("nav .logo img,nav ul li,nav .others",{
    duration:1,
    opacity:0,
    stagger:0.3
})

tl.from("main h1",{
    y:100,
    opacity:0,
    stagger:0.2,
})

tl.from(".maincontainer .simg",{
    scale:0,
    stagger:0.2,
})

tl.to(".scroll",{
    y:20,
    duration:0.5,
    repeat:-1,
    yoyo:true
})