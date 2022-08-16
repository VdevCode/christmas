let searchButton = document.querySelector('#menu__search');
let searchForm = document.querySelector('.search-form');
let menuButton = document.querySelector('#menu__btn');
let openMenu = document.querySelector('.navbar');


searchButton.addEventListener('click',function(){
    searchButton.classList.toggle('bx-x');
    searchForm.classList.toggle('active');
    openMenu.classList.remove('active')
})

window.addEventListener('scroll',()=>{
    searchButton.classList.remove('bx-x');
    searchForm.classList.remove('active');
})

menuButton.addEventListener('click',()=>{
    openMenu.classList.toggle('active');
    searchForm.classList.remove('active');
})

//button slide image
let slideImage = document.querySelectorAll('.slide');
let indexButton = 0;

function nextImage(){
    slideImage[indexButton].classList.remove('active');

    indexButton = (indexButton +1) % slideImage.length;
    slideImage[indexButton].classList.add('active');
}

function prevImage(){
    slideImage[indexButton].classList.remove('active');

    indexButton = (indexButton -1 + slideImage.length) % slideImage.length;
    slideImage[indexButton].classList.add('active');
}


//darkmode toggle
let darkmode =document.querySelector('#darkmode');

darkmode.addEventListener('click',function(){
    darkmode.classList.toggle('bxs-sun');
    if(darkmode.classList.contains('bxs-sun')){
        document.body.classList.toggle('active');
    }
    else{
        document.body.classList.remove('active');
    }
})