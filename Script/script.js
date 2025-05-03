function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAnimation();

function texSwapAnim(){
var hoverElem1 = document.getElementById("nav-elem-1");
var hoverElem2 = document.getElementById("nav-elem-2");
var elem11 = document.getElementById("elem-1-1")
var elem12 = document.getElementById("elem-1-2")

var elem21 = document.getElementById("elem-2-1")
var elem22 = document.getElementById("elem-2-2")



hoverElem1.addEventListener("mouseenter", () => {
  gsap.to(elem11,{
    transform:"translateY(-100%)",
    opacity:0,
    duration:0.2
  })
  gsap.to(elem12,{
    transform:"translateY(-100%)",
    opacity:1,
    duration:0.2
  })
})

hoverElem1.addEventListener("mouseleave", () => {
  gsap.to(elem11,{
    transform:"translateY(0%)",
    opacity:1,
    duration:0.2
  })
  gsap.to(elem12,{
    transform:"translateY(0%)",
    opacity:0,
    duration:0.2
  })
})

hoverElem2.addEventListener("mouseenter", () => {
  gsap.to(elem21,{
    transform:"translateY(-100%)",
    opacity:0,
    duration:0.2
  })
  gsap.to(elem22,{
    transform:"translateY(-100%)",
    opacity:1,
    duration:0.2
  })
})

hoverElem2.addEventListener("mouseleave", () => {
  gsap.to(elem21,{
    transform:"translateY(0%)",
    opacity:1,
    duration:0.2
  })
  gsap.to(elem22,{
    transform:"translateY(0%)",
    opacity:0,
    duration:0.2
  })
})

}

function hamAnim(){
  var btnHamburger = document.getElementById("menu-press");  // Clickable container
var menuHamburger = document.getElementById("hamburger-open");
var bars = document.querySelectorAll(".hamburger-bar");  // All three bars

var menuOpen = false;

gsap.set(menuHamburger, { x: "100%" }); // Start hidden

btnHamburger.addEventListener("click", () => {
  if (!menuOpen) {
    // Open menu
    gsap.to(menuHamburger, { x: 0, duration: 0.5 });

    // Animate bars
    gsap.to(bars[0], { rotate: 45, y: 6, duration: 0.3 });
    gsap.to(bars[1], { opacity: 0, duration: 0.3 });
    gsap.to(bars[2], { rotate: -45, y: -6, duration: 0.3 });
  } else {
    // Close menu
    gsap.to(menuHamburger, { x: "100%", duration: 0.5 });

    // Reset bars
    gsap.to(bars[0], { rotate: 0, y: 0, duration: 0.3 });
    gsap.to(bars[1], { opacity: 1, duration: 0.3 });
    gsap.to(bars[2], { rotate: 0, y: 0, duration: 0.3 });
  }
  menuOpen = !menuOpen;
});
}

function hamElemAnim(){
  var hamElem1 = document.getElementById("ham-elem-1");
  var dot1 = document.getElementById("dot-1");
  var title1 = document.getElementById("title-1");

  var hamElem2 = document.getElementById("ham-elem-2");
  var dot2 = document.getElementById("dot-2");
  var title2 = document.getElementById("title-2");

  var hamElem3 = document.getElementById("ham-elem-3");
  var dot3 = document.getElementById("dot-3");
  var title3 = document.getElementById("title-3");

  var hamElem4 = document.getElementById("ham-elem-4");
  var dot4 = document.getElementById("dot-4");
  var title4 = document.getElementById("title-4");

  var hamElem5 = document.getElementById("ham-elem-5");
  var dot5 = document.getElementById("dot-5");
  var title5 = document.getElementById("title-5");

  // hamElement-1 Animation

  hamElem1.addEventListener("mouseover", () => {
    gsap.to(dot1,{
      opacity:1,
      scale:1
    })
    gsap.to(title1,{
      transform:("translateX(0vw)")
    })
  })

  hamElem1.addEventListener("mouseleave", () => {
    gsap.to(dot1,{
      opacity:0,
      // transform:("translateX(-300%)")
    })
    gsap.to(title1,{
      transform:("translateX(-3vw)")
    })
  })

  // hamElement-2 Animation

  hamElem2.addEventListener("mouseover", () => {
    gsap.to(dot2,{
      opacity:1,
      scale:1
    })
    gsap.to(title2,{
      transform:("translateX(0vw)")
    })
  })

  hamElem2.addEventListener("mouseleave", () => {
    gsap.to(dot2,{
      opacity:0,
      // transform:("translateX(-300%)")
    })
    gsap.to(title2,{
      transform:("translateX(-3vw)")
    })
  })

  // hamElement-3 Animation

  hamElem3.addEventListener("mouseover", () => {
    gsap.to(dot3,{
      opacity:1,
      scale:1
    })
    gsap.to(title3,{
      transform:("translateX(0vw)")
    })
  })

  hamElem3.addEventListener("mouseleave", () => {
    gsap.to(dot3,{
      opacity:0,
      // transform:("translateX(-300%)")
    })
    gsap.to(title3,{
      transform:("translateX(-3vw)")
    })
  })

  // hamElement-4 Animation

  hamElem4.addEventListener("mouseover", () => {
    gsap.to(dot4,{
      opacity:1,
      scale:1
    })
    gsap.to(title4,{
      transform:("translateX(0vw)")
    })
  })

  hamElem4.addEventListener("mouseleave", () => {
    gsap.to(dot4,{
      opacity:0,
      // transform:("translateX(-300%)")
    })
    gsap.to(title4,{
      transform:("translateX(-3vw)")
    })
  })

  // hamElement-5 Animation

  hamElem5.addEventListener("mouseover", () => {
    gsap.to(dot5,{
      opacity:1,
      scale:1
    })
    gsap.to(title5,{
      transform:("translateX(0vw)")
    })
  })

  hamElem5.addEventListener("mouseleave", () => {
    gsap.to(dot5,{
      opacity:0,
      // transform:("translateX(-300%)")
    })
    gsap.to(title5,{
      transform:("translateX(-3vw)")
    })
  })


}

function bookBtnAnim(){
  var bookNowBtn = document.getElementById("book-now-desk");
  var bookNowBtn1 = document.getElementById("book-now-btn-1");

  bookNowBtn.addEventListener("mouseenter", () => {
    gsap.to(bookNowBtn1,{
      backgroundColor: ("#403582")
    })
  })

  bookNowBtn.addEventListener("mouseleave", () => {
    gsap.to(bookNowBtn1,{
      backgroundColor: ("#7a63ff")
    })
  })

}

var mainHoveDiv = document.getElementById("email-main")
var hoverEmail1 = document.getElementById("email-anim-1")
var hoverEmail2 = document.getElementById("email-anim-2")

mainHoveDiv.addEventListener("mouseover", () => {
  gsap.to(hoverEmail1, {
    transform: "TranslateY(-100%)",
    duration:0.2
  })

  gsap.to(hoverEmail2, {
    transform: "TranslateY(-100%)",
    duration:0.2
  })
})

mainHoveDiv.addEventListener("mouseleave", () => {
  gsap.to(hoverEmail1, {
    transform: "TranslateY(0%)",
    duration:0.2
  })

  gsap.to(hoverEmail2, {
    transform: "TranslateY(0%)",
    duration:0.2
  })
})

bookBtnAnim();
hamElemAnim();
texSwapAnim();
hamAnim();
