document.addEventListener('DOMContentLoaded', function() {
    crearGaleria()
})

function crearGaleria() {
    
    const CANTIDAD_IMAGNES = 16
    const galeria = document.querySelector('.galeria-imagenes')
    
    for(let i = 1; i <= CANTIDAD_IMAGNES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/Img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galeria'
        
        galeria.appendChild(imagen)
    }
}