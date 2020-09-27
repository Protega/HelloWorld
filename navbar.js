
    var toggle=document.getElementsByClassName('toggle')[0]
    var navLinks=document.getElementsByClassName('nav-links')[0]
    
    toggle.addEventListener('click',()=>{
        navLinks.classList.toggle('active')
    })

