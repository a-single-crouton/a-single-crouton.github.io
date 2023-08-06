import { banjaxedDesc, edgeLedgerDesc, hotelDesc, newsGridDesc, portfolioDesc, banjaxedLink, edgeLedgerLink, hotelLink, newsGridLink, portfolioLink } from "./description.js"

let slidePosition = 1;
const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')
const visitBtn = document.getElementById('visitBtn')
const visitBtnLink = visitBtn.querySelector('a')
const carousel = document.getElementById('carouselWindow');

nextBtn.addEventListener('click', slideAdd) 

prevBtn.addEventListener('click', slideRemove)


function slideAdd() {
    console.log("before:", slidePosition)
    let slideAmount = (slidePosition * 960)
    carousel.style.transform = `translateX(${-slideAmount}px)`;
    if(slidePosition < 6){
        slidePosition++;
        describe()
    }

    if(slidePosition == 6) {
        slidePosition = 1;
        carousel.style.transform = `translateX(${0}px)`;
        describe()
        
    }
    console.log("after:", slidePosition)
}

function slideRemove() {
    slidePosition--;

    if(slidePosition < 1) {
        slidePosition = 5
        describe()}
    let slideAmount = (slidePosition -1) * 960;
    carousel.style.transform = `translateX(${-slideAmount}px)`;
    describe()
    
  
    


        // carousel.style.transform = `translateX(${slideAmount * -4}px)`;
    console.log("after:", slidePosition)
    console.log("slideAmount:", slideAmount)
}

function describe() {
    let description = document.getElementById('description')
    if(slidePosition == 1){
        description.innerHTML = `${banjaxedDesc}`;
        visitBtnLink.href = `${banjaxedLink}`;

    }
    if(slidePosition == 2){
        description.innerHTML = `${edgeLedgerDesc}`;
        visitBtnLink.href = `${edgeLedgerLink}`;
    }
    if(slidePosition == 3){
        description.innerHTML = `${hotelDesc}`;
        visitBtnLink.href = `${hotelLink}`;
    }
    if(slidePosition == 4){
        description.innerHTML = `${newsGridDesc}`;
        visitBtnLink.href = `${newsGridLink}`;
    }
    if(slidePosition == 5){
        description.innerHTML = `${portfolioDesc}`;
        visitBtnLink.href = `${portfolioLink}`;
    }
}