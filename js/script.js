let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let corouselDom = document.querySelector('.corousel');
let listItemDom = document.querySelector('.corousel .list');
let thumbnailDom = document.querySelector('.corousel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev');
}
let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeout;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
}, timeAutoNext); 

function showSlider(type){
    let itemSlider = document.querySelectorAll('.corousel .list .item');
    let itemThumbnail = document.querySelectorAll('.corousel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        corouselDom.classList.add('next');
    }else{
        let positionLastItem =  itemSlider.length - 1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        corouselDom.classList.add('prev');
    }

    clearTimeout(runTimeout);
    runTimeout = setTimeout(() =>{
        corouselDom.classList.remove('next');
        corouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(()=>{
        nextDom.click();
    }, timeAutoNext);
}

const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", () => (
    menuList.classList.toggle("hidden")
))