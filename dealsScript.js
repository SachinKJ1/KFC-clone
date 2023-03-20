'use strict';


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

document.querySelector('.menu__btn').addEventListener('click',function(){
    document.querySelector('.menu').classList.remove('hide');
})

document.querySelector('.close__Menu').addEventListener('click',function(){
    document.querySelector('.menu').classList.add('hide')
})