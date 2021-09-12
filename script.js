let menu = document.querySelector('.menu')
let ul = document.querySelector('.ul')
let close = document.querySelectorAll('.close')



menu.addEventListener('click',function(){
    ul.style.left='0%';
})
close.forEach( i => {
    i.addEventListener('click',function(){
        ul.style.left='-100%'
    })
})