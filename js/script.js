

let slidercontainer=document.getElementById('slidercontainer');
let slider=document.getElementById('slider');
let cards=slider.getElementsByTagName('li');

let sliderconwidth=slidercontainer.clientWidth;
let elementstoshow=5;

if(document.body.clientWidth<1000){
    let elementstoshow=1;
}else if(document.body.clientWidth<1500){
    let elementstoshow=2;
}

let cardwidth=sliderconwidth/elementstoshow;

slider.style.width=cards.length*cardwidth+'px';

slider.style.transition='margin';
slider.style.transitionDuration='1s'

for(let index=0; index < cards.length; index++){
    const element=cards[index];
    element.style.width=cardwidth+'px';
}

function prev(){
    
    if(+slider.style.marginLeft.slice(0,-2) != -cardwidth * (cards.length - elementstoshow)){
    slider.style.marginLeft=((+slider.style.marginLeft.slice(0,-2))-cardwidth)+'px';
    }
}
function next(){
    if(+slider.style.marginLeft.slice(0,-2)!=0){
    slider.style.marginLeft=((+slider.style.marginLeft.slice(0,-2))+cardwidth)+'px';

    }    
}


function autoplay(){
    prev()
    if(+slider.style.marginLeft.slice(0,-2) === -cardwidth * (cards.length - elementstoshow)){
        slider.style.marginLeft='0px'
    }
    setTimeout(()=>{
        autoplay()
    },1000)
   
}

setTimeout(()=>{
    console.log('y')
    autoplay();
},3000);

// setTimeout(()=>{
//     console.log('y')
//     autoplay();
// },700);






















