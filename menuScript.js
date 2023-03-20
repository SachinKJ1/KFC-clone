'use strict';

document.addEventListener('click',function(e){
    if(e.target.classList.contains('cartBtn')){
        document.querySelector('.PlaceOrderClass').classList.toggle('placeOrder')
        document.querySelector('.overlay').classList.toggle('overlaySettings')

    };
})

document.querySelector('.closePlaceOrder').addEventListener('click',function(){
    document.querySelector('.PlaceOrderClass').classList.toggle('placeOrder')
        document.querySelector('.overlay').classList.toggle('overlaySettings')

})
const allSection = document.querySelectorAll('.section__content')
const sectionLinks = document.querySelectorAll('.section')
const revealSection = function(enrties,observe){
    const [entry] = enrties;
    const {val} = entry.target.dataset
    if(entry.isIntersecting){
        // sectionLinks.forEach(el=>el.classList.remove('menuLinks'))
        
        document.querySelector(`.section[data-section="${val}"]`).classList.add('menuLinks')
    }else{
        document.querySelector(`.section[data-section="${val}"]`).classList.remove('menuLinks')

    }
}

const sectionObserver = new IntersectionObserver(revealSection,{
    root:null,
    threshold:0.15
})

allSection.forEach(function(section){
    sectionObserver.observe(section)

})



sectionLinks.forEach(function(el){
    
    el.addEventListener('click',function(e){
      const {section} = e.target.dataset
      document.querySelector(`.section__content[data-val="${section}"]`).scrollIntoView({ behavior: 'smooth' })
      
    })
})

document.querySelector('.menu__btn').addEventListener('click',function(){
    document.querySelector('.menu').classList.remove('hide');
})

document.querySelector('.close__Menu').addEventListener('click',function(){
    document.querySelector('.menu').classList.add('hide')
})