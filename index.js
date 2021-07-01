const burgerBtn = document.querySelector('.burger-btn');
// const menu = document.querySelector('.menu');


const handleEvent = ()=>{
    let display = document.querySelector('.menu').style.display;    

    if(display==='none'){        
        return document.querySelector('.menu').style.display = 'flex';
    } 
        return document.querySelector('.menu').style.display = 'none';
};

burgerBtn.addEventListener('click', handleEvent);