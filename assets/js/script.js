let main = document.querySelector('.main'); 
let start = document.querySelector('.start');
let isSubmitted = true;


function enterGame(){
    if (isSubmitted){
        main.style.display = 'block';
        start.style.display = 'none';
        isSubmitted = false;
    }else{
        main.style.display = 'none';
        start.style.display = 'block';
        isSubmitted = true;     
    }
}






