document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
})

function crearGaleria() {
    
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')
    
    for(let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/Img/gallery/full/${i}.jpg`
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