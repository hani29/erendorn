import {
    menuItems
} from "./constants";

export const getNextHash = (currentHash) => {
    const currentIndex = menuItems.findIndex(item => item.href.includes(currentHash))

    if(currentHash === '#footer' || currentIndex >= (menuItems.length - 1))
        return { href: '/#footer', id: null }

    if(currentIndex < (menuItems.length - 1))
        return { href: menuItems[currentIndex + 1].href, id: menuItems[currentIndex + 1].id }
}

export const getPreviousHash = (currentHash) => {
    const currentIndex = menuItems.findIndex(item => item.href.includes(currentHash));

    if(currentHash === '#footer')
        return { href: menuItems[menuItems.length - 1].href, id: menuItems[menuItems.length - 1].id };

    if(currentIndex > 0)
        return { href: menuItems[currentIndex - 1].href, id: menuItems[currentIndex - 1].id };

    return { href: `/${currentHash}`, id: 1 }
}

export const getCurrentHash = (currentHash) => {
    const currentIndex = menuItems.findIndex(item => item.href.includes(currentHash));

    if(currentIndex === -1)
        return { href: `/${currentHash}`, id: menuItems[menuItems.length - 1].id }

    return { href: `/${currentHash}`, id: menuItems[currentIndex].id }
}

export const controlBarClicked = (position, containerQuerySelector, itemWidth, numberOfItems) => {
    const racesClassesList = document.querySelector(containerQuerySelector);
    sideScroll(racesClassesList,'right',3,itemWidth * numberOfItems * position,10, 'absolute');
}

export const leftArrowClicked = (containerQuerySelector, itemWidth) => {
    const racesClassesList = document.querySelector(containerQuerySelector);
    sideScroll(racesClassesList,'left',10,itemWidth,10);
}

export const rightArrowClicked = (containerQuerySelector, itemWidth) => {
    const racesClassesList = document.querySelector(containerQuerySelector);
    sideScroll(racesClassesList,'right',10,itemWidth,10);
}

const sideScroll = (element,direction,speed,distance,step,type) => {

    if(type === 'absolute') {
        var slideTimer = setInterval(function(){
            if(element.scrollLeft > distance){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            if(element.scrollLeft <= (distance + 10) && (element.scrollLeft >= (distance - 10))) {
                element.scrollLeft = distance
                window.clearInterval(slideTimer);
            }
        }, speed);
    } else {
        let scrollAmount = 0;
        var slideTimer = setInterval(function(){
            if(direction == 'left'){
                element.scrollLeft -= step;
            } else {
                element.scrollLeft += step;
            }
            scrollAmount += step;
            if(scrollAmount >= distance){
                window.clearInterval(slideTimer);
            }
        }, speed);
    }
}