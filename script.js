
var tl=gsap.timeline();


tl.from("#page1 h1",{
    y:100,
    opacity:0,
    duration:0.5,
    stagger:0.3
})

tl.from("#video-container",{
   opacity:0,
   duration:1,
})
tl.from("#box",{
   y:140,
   duration:0.8,
   opacity:0,
})
tl.from("#page3 h1,#page3 p",{
   opacity:0,
   y:120
})
tl.from("#product",{
   opacity:0,
   y:120,
   stagger:0.6
})

var videocon=document.querySelector("#video-container");
var playbtn=document.querySelector("#play");
videocon.addEventListener("mouseenter",function()
{
     tl.to(playbtn,{
        scale:1,
        opacity:1
     })
})
videocon.addEventListener("mouseleave",function()
{
     tl.to(playbtn,{
        scale:0,
        opacity:0
     })
})
videocon.addEventListener("mousemove",function(dets)
{
     tl.to(playbtn,{
        left:dets.x+ +30,
        top:dets.y+ +370
     })
})



var checkbox1=document.querySelector("#checkbox1");
var checkbox2=document.querySelector("#checkbox2");
var checkbox3=document.querySelector("#checkbox3");
var appr=document.querySelector("#page6 h1");
var img1=document.querySelector(".comp1 img")
var img2=document.querySelector(".comp2 img")
var img3=document.querySelector(".comp3 img")
function fill(){
   checkbox1.style.backgroundColor="black"
   checkbox2.style.background="none";
   checkbox3.style.background="none";
   img2.style.opacity=0;
   img3.style.opacity=0;
   appr.innerHTML="I LOVE THE STORY BEHIND THIS BUSINESS AND THE PEOPLE WHO RUN AND WORK IN IT - IT FEELS GOOD TO WORK WITH PEOPLE DOING A GOOD JOB"
     tl.to(appr,{
         opacity:1,
         y:-60,
         duration:1,
   })
   tl.to(img1,{
      opacity:1,
      scale:1.5,
      duration:1,
   }) 
}
function fill1(){
   appr.innerHTML="THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING; IT MEANS A LOT WORKING WITH A COMPANY SUCH AS TWO GOOD CO."
   checkbox1.style.background="none";
   checkbox3.style.background="none";
   checkbox2.style.backgroundColor="black";
   img1.style.opacity=0;
   img3.style.opacity=0;
   gsap.to(appr,{
         opacity:1,
         y:-60,
         duration:1,
   })
   gsap.to(img2,{
      opacity:1,
      x:-20,
      scale:1.5,
      duration:1,
   }) 
}
function fill2(){
   appr.innerHTML="EVERYONE AT TWO GOOD ARE LOVELY TO WORK WITH.CATERING WAS EXCELLENT AND WELL PRICED, ALL FOR A GOOD CAUSE...WHAT'S NOT TO LOVE?"
   checkbox3.style.backgroundColor="black";
   checkbox2.style.background="none";
   checkbox2.style.background="none";
   img1.style.opacity=0;
   img2.style.opacity=0;
   gsap.to(appr,{
         opacity:1,
         y:-60,
         duration:1,
   })
   gsap.to(img3,{
      opacity:1,
      scale:1.5,
      duration:1,
   }) 
}
function locomotiveAnimation(){
   gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
locomotiveAnimation();

tl.to("#nav-part1 svg",{
   transform:"translateY(-120%)",
   scrollTrigger:{
      trigger:"#page1",
      scroller:"#main",
      start:"top 0",
      end:"top -5%",
      scrub:true
   }
})
tl.to("#nav-part2 #links",{
   transform:"translateY(-120%)",
   opacity:0,
   scrollTrigger:{
      trigger:"#page1",
      scroller:"#main",
      start:"top 0",
      end:"top -5%",
      scrub:1
   }
})

document.addEventListener("mousemove",function(dets)
{
     gsap.to("#cursor",{
        left:dets.x,
        top:dets.y
     })
})

document.querySelectorAll("#product").forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
      gsap.to("#cursor",{
         transform:"translate(-50%,-50%) scale(1)",
      })
   })
})

document.querySelectorAll("#product").forEach(function(elem){
   elem.addEventListener("mouseleave",function(){
      gsap.to("#cursor",{
         transform:"translate(-50%,-50%) scale(0)",
      })
   })
})

 var menu=document.querySelector("#nav-menu");
 function menuOpen(){
         document.querySelector("#navbar").style.color="white";
         document.querySelector("#icons").style.backgroundColor="white";
         document.querySelector("#close").style.display="block";
         document.querySelector("#open").style.display="none";
         var tl2=gsap.timeline();
          tl2.to(menu,{
               top:"0",
               opacity:1,
               duration:0.5,
          })
 }
  function menuClose(){
         document.querySelector("#navbar").style.color="black";
         document.querySelector("#icons").style.backgroundColor="transparent";
         document.querySelector("#open").style.display="block";
         document.querySelector("#close").style.display="none";
         tl.to(menu,{
                     top:"-100vh",
                     opacity:0,
                     duration:0.5,
                })
      }
      gsap.to("#footer2 svg",{
         transform:"translateY(-100%)",
         scrollTrigger:{
            trigger:"#page9",
            scroller:"#main",
            start:"top 50%",
            end:"top 5%",
            scrub:true
         }
      })
  
