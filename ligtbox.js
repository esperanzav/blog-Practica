const imagenes = document.querySelectorAll('.img-galeria')//seleccionamos todos los elementos q tengan la clase img galeria
const imglight = document.querySelector('.agregar-imagen')//aqui se toma la imagen q se va agregar al ligthbox
const contenedorlight = document.querySelector('.imagen-light')//tomamos al contenedor
const hamburguer1 = document.querySelector('.hamburguer');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen (imagen.getAttribute('src'))
    })
})

contenedorlight.addEventListener('click',(e)=>{
    if(e.target !== imglight){
        contenedorlight.classList.toggle('show')
        imglight.classList.toggle('showImage')
        hamburguer1.style.opacity ='1'
    }
})

const aparecerImagen = (imagen)=>{
    imglight.src = imagen;   // la img q se va a poner en el libox
    contenedorlight.classList.toggle('show')//con esto aparace el contenedor de lighbox el oscuro
    imglight.classList.toggle('showImage')// con esto aparece la imagen
    hamburguer1.style.opacity ='0'
}