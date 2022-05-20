const titreSpans = document.querySelectorAll("h1 span");
const btns= document.querySelectorAll('.btn-first');
const logo= document.querySelector('.logo');
const medias= document.querySelectorAll('.bulle');
const navright=document.querySelector('.navright');
const navleft=document.querySelector('.navleft');
window.addEventListener('load' ,()=>{

    const TL = gsap.timeline({paused:true});

    TL
    .staggerFrom(titreSpans , 1 , {top:-50,opacity:0 , ease:"power2.out"},0.3)
    .staggerFrom(btns , 1 , {opacity:0 , ease:"power2.out"} ,0.3, '-=1')
    .from(navright, 1, {width:0 , ease:"power2.out"}, "-=2")
    .from(navleft, 1, {width:0 , ease:"power2.out"}, "-=2")
    .from(logo, 1, {transform:"scale(0)" , ease:"power2.out"} ,"-=1")
    .staggerFrom(medias,1 ,{right:-200,ease:"power2.out"} ,0.3, '-=1')
    TL.play();

});