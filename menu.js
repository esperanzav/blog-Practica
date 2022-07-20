const hamburguer = document.querySelector('.hamburguer');//toma la clase hamburguer
const menu = document.querySelector('.menu-navegacion');

//console.log(hamburguer)
//console.log(menu)


hamburguer.addEventListener('click',()=>{//quiero q al elemento hamburguer tenga un evento tipo click
  menu.classList.toggle("spread")//esto singnifica q cada vez q le click al menu hamburgues vas a ponerle o quitarle la clase spread
})

//para cerrar el menu cada vez q se le de click
window.addEventListener('click', e =>{//cualquiera que toca la pantalla haga
if(menu.classList.contains('spread')//si el menu.classlist tiene la clase spreed haz
    && e.target != menu && e.target != hamburguer ){//si le damos click a algo diferente al menu quiero q se ejecute

      menu.classList.toggle("spread")

}
})