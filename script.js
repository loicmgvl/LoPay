const drop = document.querySelectorAll('.drop-hover')

drop.forEach(dropmenu =>{
    dropmenu.addEventListenner('mouseover', ()=>{
        dropmenu.lastElementChild.style.cssText = 'opacity:1; visibility: visible'
        document.querySelector('.navbar-container').style.background = 'linear-gradient(to right, #036bb1, #2f8fdf, #036bb1)'
    })

    dropmenu.addEventListenner('mouseout', ()=>{
        dropmenu.lastElementChild.style.cssText = 'opacity:0; visibility: hidden; transition: ease 0.7s'
        document.querySelector('.navbar-container').style.background = '0'
    })
});