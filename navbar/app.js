const toggleButn=document.querySelector('.nav-toggle');
const links=document.querySelector('.links');
toggleButn.addEventListener('click',function(){
    links.classList.toggle('show-links');

})