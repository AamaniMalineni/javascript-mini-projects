const sidebar=document.querySelector('.sidebar')
const close=document.querySelector('.sidebar')
const toggle=document.querySelector('.sidebar-toggle');
toggle.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar');
})
close.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar');
})