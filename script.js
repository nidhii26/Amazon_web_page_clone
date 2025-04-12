//select the slider and hide other images and show only one images 

const imgs= document.querySelectorAll('.header-slider ul img');
const prev_btn= document.querySelector('.control_prev');
const next_btn= document.querySelector('.control_next');


let n=0;//it will display 1st imageOrientation: 

function changeSlide(){
    //hide all images
    for(let i=0;i<imgs.length;i++){
        imgs[i].style.display='none';
    }
    //show first imageOrientation: 
    imgs[n].style.display = 'block';
    }
changeSlide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n= imgs.length - 1;
    }
    changeSlide();
})
next_btn.addEventListener('click',(e)=>{
    if(n< imgs.length -1){
        n++;
    }
    else{
        n= 0;
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
for (const item of scrollContainer) {
    item.addEventListener('slide',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}


