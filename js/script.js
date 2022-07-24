/* abre ee fecha menu lateral em modo mobile */
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

/* função callback + if ternario*/
menuMobile,addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
        ? menuMobile.classList.replace("bi-list", "bi-x")
        : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});

/* Fechar o menu quando clicar em algum item */
const navItem = document.querySelector('.navItem')

/* console.log(navItem) */
navItem.forEach(item => {
    item.addEventListener('click', () =>{
        if (body.classList.contains("menu-nav-active")){
           body.classList.remove("menu-nav-active") 
           menuMobile.classList.replace("bi-x", "bi-list")
        }
    })
})