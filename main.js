let stars = document.getElementById('stars');
let moon2 = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat');
let Abdelrahman = document.querySelector('.Abdelrahman')
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    Abdelrahman.style.fontsize = value + 'px';
}
if(scrollY >= 67){
    Abdelrahman.style.fontsize = 67 + 'px';
    Abdelrahman.style.position = fixed ;   
}
if(scrollY >= 478){
    Abdelrahman.style.display = none ;
}else{
    Abdelrahman.style.display = block ;
}
