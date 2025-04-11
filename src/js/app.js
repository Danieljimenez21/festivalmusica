document.addEventListener('DOMContentLoaded', function() {
    navegacionfija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})

function navegacionfija(){
    const header = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function(){
        if (sobreFestival.getBoundingClientRect().bottom < 1){
            header.classList.add('fixed')
        } else {
            header.classList.remove('fixed')
        }
    })
}

function crearGaleria() {
    
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')
    
    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.loading = 'lazy'
        imagen.width = '300'
        imagen.height = '200'
        imagen.src = `src/Img/gallery/thumb/${i}.jpg`
        imagen.alt = 'Imagen Galeria'
        

        //event handler
        imagen.onclick = function(){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)
    }
}


function mostrarImagen (i){
    const imagen = document.createElement('IMG')
    imagen.src = `src/Img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galeria'

    //generar modal 
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal

    //botón cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    //agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)

    console.log(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')

    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    },400);
}

function resaltarEnlace(){
    window.addEventListener('scroll', function(){
        const sections = document.querySelectorAll('section')
        const navList = this.document.querySelectorAll('.navegacion-principal a')

        let actual = '';
        sections.forEach( section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight
            if(window.scrollY >= (sectionTop - sectionHeight / 3 )){
                actual = section.id
            }
        })

        navList.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual){
                link.classList.add('active')
            }
        })
    })
}

function scrollNav(){
    const navList = document.querySelectorAll('.navegacion-principal a')

    navList.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScrooll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScrooll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}