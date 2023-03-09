const imagesArray = [
    {
        image: "img/01.webp",
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imageContainertDom = document.querySelector('.image-container');
let sliderContent = "";
for (let i = 0; i < imagesArray.length; i++) {
    const newImageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imagesArray[i].image}" />
                                <span> ${imagesArray[i].title} <br/>
                                ${imagesArray[i].text}</span>
                            </div>`;

sliderContent += newImageWrapper;       
   
}

imageContainertDom.innerHTML = sliderContent;


const imagesWrapperDom = document.getElementsByClassName('image-wrapper');


let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('d-block');


const arrowNext = document.querySelector('#next');
const arrowPrev = document.querySelector('#prev');

arrowNext.addEventListener('click', 
    function() {
        
            imagesWrapperDom[activeImage].classList.remove('d-block');
            activeImage++;
            if (activeImage > imagesWrapperDom.length - 1){
                activeImage = 0;
            }
                
            
            
            imagesWrapperDom[activeImage].classList.add('d-block');
            arrowPrev.classList.remove('hide');

       

         
    
        });

arrowPrev.addEventListener('click', 
    function() {
        imagesWrapperDom[activeImage].classList.remove('d-block');
        activeImage--;
        if (activeImage < 0) {
            activeImage = imagesWrapperDom.length - 1;

        }

            imagesWrapperDom[activeImage].classList.add('d-block');
            arrowNext.classList.remove('hide');
            
            // if (activeImage == 0) {
            //     arrowPrev.classList.add('hide');
            // }

    }
);