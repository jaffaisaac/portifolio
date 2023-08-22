// this is to  get all cards in the Html 
const cards =document.querySelectorAll('.card');

// add the event listern
cards.forEach(  card =>{
    // get the attribute from each card
    const url =card.getAttribute('data-url');

    // add eventlister
    card.addEventListener('click',()=>{
        window.location.href =url;
    })
}

);


/**here is the code for the progress bar */
// here am coming bodysection2

const bodySection2 =document.querySelector('.bodySection2');
const progressBars =document.querySelectorAll('.progressbar');

function showProgress(){
    // here you are to trach each progress bar independently
    progressBars.forEach(EachBar =>{
       const value =EachBar.dataset.progress;
    //    console.log(value);
        EachBar.style.opacity =1;
        EachBar.style.width =`${value}%`
    })
}
function hideProgress(){
    progressBars.forEach((p)=>{
        p.style.opacity =0;
        p.style.width =0;
    })

    
}


// here we are going to use the 
window.addEventListener('scroll',()=>{
const bodysection_PopUP =bodySection2.getBoundingClientRect().top;
const elementInTergetPosition = window.innerHeight /2;

if( bodysection_PopUP < elementInTergetPosition){
    showProgress();
    
}else{
   hideProgress();
}
})

// hamberger menu   below
let humberger =document.querySelector(".hamburger");
let links =document.querySelectorAll('.sideBar  a');
let sideBar =document.querySelector('.sideBar')
// toggle menu on the hamberger menu 
humberger.addEventListener("click",()=>{
   sideBar.classList.toggle('off')
})




//this loops through the links and removes all the clicked events
links.forEach(link=>{
    link.addEventListener("click",()=>{
       sideBar.classList.remove('off')
    })
})





























