const menuMobile = document.querySelector('.menu-mobile')
const menu = document.querySelector('.menu')
const btnTema = document.querySelector('.btn-tema')
const ball = document.querySelector('.ball')
const body = document.querySelector('body')
const textoApresentacao = document.querySelector('.texto-apresentacao')
const iconeMenu = document.querySelector('.icone-menu')

menuMobile.addEventListener('click', () => {
    menu.classList.toggle('active')
    menuMobile.classList.toggle('active')
})

btnTema.addEventListener('click', ()=> {
    btnTema.classList.toggle('active')
    ball.classList.toggle('active')
    body.classList.toggle('active')
    textoApresentacao.classList.toggle('active')
    menu.classList.toggle('active2')
    iconeMenu.classList.toggle('active')
    menuMobile.classList.toggle('active2')
})