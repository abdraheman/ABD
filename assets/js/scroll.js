$(window).scroll(function(){
    // let wd = $(this).scrollTop();
    // let w = $('.hero').innerWidth()
    // let a= -w;
    // if(wd<=w){
    // $('.hero').css('transform',`translateX(${wd}px)`)
    // $('.about-me2').css('transform',`translateX(${a + wd}px)`)}
    let h = document.documentElement;
    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;
    let percent = st / (sh - h.clientHeight) * 100;
    $('.charge-page').css('width',`${percent}%`)
})
    let h = document.documentElement;
    let st = h.scrollTop || document.body.scrollTop;
    let sh = h.scrollHeight || document.body.scrollHeight;
    let percent = st / (sh - h.clientHeight) * 100;
    $('.charge-page').css('width',`${percent}%`)
// let size = function (){
//   let w = $('.hero').innerWidth()
//   let h = $('.hero').innerHeight()
//   $('.first-section').css('height',`${w+h}`);
//   $('.about-me2').css('transform',`translateX(${-w}px)`)
// }
// $(window).resize(size)
// size()
// window.addEventListener('scroll',function(){
//     let s = window.scrollTo(top)
//     console.log(s.innerHeight)
// })
// const swiper = new Swiper('.swiper-container', {
//     slideToClickedSlide: true,
//     slidePerView: "auto",
//     freeMode: {
//       enabled: true,
//       sticky: false,
//       momentumBounce: false,
//     },
//     scrollbar: {
//       el: '.swiper-scrollbar',
//       draggable: true,
//       dragSize: 100,
//     },
//     mousewheel: {
//       enabled: true,
//       sensitivity: 4,
//     },
//   });
// let h = $(window).innerHeight();
// let w = $('.footer').innerWidth();


let res = function() {
  if (window.matchMedia("(max-width: 992px)").matches) {
    gsap.set(".hero", { x: "0%", opacity: 1 });
    gsap.set(".about-me", { x: "0%", opacity: 1 });
    
  } else {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".first-section",
        pin: true,
        start: "top top",
        end: "+=100%",
        scrub: 3,
      },
    });
    tl.to(".hero", { x: "100%", opacity: 0 }, 0);
    tl.to(".about-me", { x: "0%", opacity: 1 }, 0);

    gsap.set(".hero", { x: "0%", opacity: 1 });
    gsap.set(".about-me", { x: "-100%", opacity: 0 });
  }
};

res();

// $(window).on("resize",res);

// let cont = document.querySelector(".first-section");
// gsap.to(".child", {
//   ease: "none",
//   x: () => (cont.scrollWidth - window.innerWidth),
//   scrollTrigger: {
//     trigger: cont,
//     pin: true,
//     start: "center center",
//     end: () => "+=" + (cont.scrollWidth - window.innerWidth),
//     scrub: true,
//     invalidateOnRefresh: true,
//   }
// });
  


// gsap.registerPlugin(ScrollTrigger);
// let revealAnimations = [];

// Scroll

// const lenis = new Lenis({
//   lerp: 0.07
// });

// lenis.on('scroll', ScrollTrigger.update)
// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// Reveal
// document.querySelectorAll('.reveal').forEach(text => {
  // let splitText = new SplitType(text, {
  //   type: 'chars'
  // })

  // Animation
//   const section = text.closest('.v2');
//   gsap.from(splitText.words, {
//     opacity: 0.2,
//     ease: 'none',
//     stagger: 1,
//     duration: 5,
//     scrollTrigger: {
//       trigger: section,
//       start: 'top top', 
//       end: () => `+=${window.innerHeight * 1}px`,
//       scrub: true,
//       pin: true,
//     }
//   })
// })




let current1 = 0;
let current2 = -200;
let current3 = 0;
let current4 = 0;


function skills(){
  current1-= 4.5;
  current2-= 5.5; 
  current3-= 5; 
  current4-= 5.2; 



  $('.skills .v1').css('transform',`translateX(${current1}px)`);
  $('.skills .v2').css('transform',`translateX(${current2}px)`);
  $('.skills .v3').css('transform',`translateX(${current3}px)`);

  if (current1*-1 > $('.v1 .each-skills').width() ){
    current1 =  current1 + $('.v1 .each-skills').width()
   $('.skills .v1').css('transform',`translateX(${current1})`);
  }

  else {
    $('.skills .v1').css('transform',`translateX(${current1}px)`);
  }

  if (current2*-1 > $('.v2 .each-skills').width() ){
    current2 =  current2 + $('.v2 .each-skills').width()
   $('.skills .v2').css('transform',`translateX(${current2})`);
  }

  else {
    $('.skills .v2').css('transform',`translateX(${current2}px)`);
  }

  if (current3*-1 > $('.v3 .each-skills').width() ){
    current3 =  current3 + $('.v3 .each-skills').width()
   $('.skills .v3').css('transform',`translateX(${current3})`);
  }

  else {
    $('.skills .v3').css('transform',`translateX(${current3}px)`);
  }

  if (current4*-1 > $('.v4 .each-skills').width() ){
    current4 =  current4 + $('.v4 .each-skills').width()
   $('.skills .v4').css('transform',`translateX(${current4})`);
  }

  else {
    $('.skills .v4').css('transform',`translateX(${current4}px)`);
  }

}

function skSize(){
  if(window.innerWidth > 992){
    setInterval( skills, 10);
  }else{
    setInterval( skills, 20);
  }
}

skSize()


