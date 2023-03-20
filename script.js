'use strict';

const slides = document.querySelectorAll('.slide')
const leftBtn = document.querySelector('.leftBtn')
const rightBtn = document.querySelector('.rightBtn')
const dotContainer = document.querySelector('.dots')
let curSlide = 0;
const maxSlide = slides.length-1
const goToSlide = function(slide){
    let screenSize = 30;
    if(window.innerWidth <= 1024){
        screenSize = 60
    }if(window.innerWidth <= 640){
        screenSize = 85
        
    }
slides.forEach((s, i) => {s.style.transform = `translateX(${screenSize * (i-slide)}%)`
s.style.opacity = "0.5"}
);
slides[slide].style.opacity = "1"
}
goToSlide(0)


 const createDots = function(){
    slides.forEach((_,i)=>{
        dotContainer.insertAdjacentHTML('beforeend',
        `<button class =" dots__dot" data-slide= "${i}"></button>`);
    });
};

const activateDot = function(slide){
    document.querySelectorAll('.dots__dot').forEach(el=> el.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}
createDots()

activateDot(0) 
const nextSlide = function(){
    if(curSlide === maxSlide)
    {slides[maxSlide].insertAdjacentElement("afterend", slides[0]);}
    if(curSlide < maxSlide){
        curSlide++
    }else{
        curSlide = 0
    }
goToSlide(curSlide)
activateDot(curSlide)
}
const prevSlide = function(){
    if(curSlide > 0){
        curSlide--
    }else{
        curSlide = maxSlide
    }
    goToSlide(curSlide)
    activateDot(curSlide)
}

leftBtn.addEventListener('click',prevSlide)
rightBtn.addEventListener('click',nextSlide)

dotContainer.addEventListener('click',function(e){
    if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset;
    goToSlide(slide)
    activateDot(slide)
    }
})

document.addEventListener('click',function(e){
    if(e.target.classList.contains('cartBtn')){
        document.querySelector('.PlaceOrderClass').classList.toggle('placeOrder')
        document.querySelector('.overlay').classList.toggle('overlaySettings')
    
    };
    if(e.target.classList.contains('detailsView')){
        document.querySelector('.viewDetails').classList.toggle('placeOrder')
        document.querySelector('.overlay').classList.toggle('overlaySettings')
        
    };
})

document.querySelector('.closePlaceOrder').addEventListener('click',function(){
    document.querySelector('.PlaceOrderClass').classList.toggle('placeOrder')
    document.querySelector('.overlay').classList.toggle('overlaySettings')
})

document.querySelector('.closeDetails').addEventListener('click',function(){
    document.querySelector('.viewDetails').classList.toggle('placeOrder')
    document.querySelector('.overlay').classList.toggle('overlaySettings')
})
// Menu

document.querySelector('.menu__btn').addEventListener('click',function(){
    document.querySelector('.menu').classList.remove('hide');
})

document.querySelector('.close__Menu').addEventListener('click',function(){
    document.querySelector('.menu').classList.add('hide')
})