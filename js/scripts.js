function openMenu(conteudoMenu){
    const menu = document.getElementById(conteudoMenu)
    menu.classList.add('open') 
}
function closeMenu(conteudoMenu){
    const menu = document.getElementById(conteudoMenu)
        menu.classList.remove('open')
}
const btnOpen = document.querySelector('.btn-open')
    btnOpen.addEventListener('click', () => openMenu('conteudoMenu'))

const closeBtn = document.querySelector('.btn-close')
    closeBtn.addEventListener('click', () => closeMenu('conteudoMenu'))