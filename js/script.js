const menu_btn = document.querySelector('.mobile_menu')
const menu_wrapper = document.querySelector('.mobile_menu_wrapper')
const menu_close = document.querySelector('.closeMenu')
const body_hidden = document.querySelector('body')

menu_btn.addEventListener('click', () => {
    menu_wrapper.classList.toggle('right_0')
    body_hidden.classList.toggle('body_hide')
})
menu_close.addEventListener('click', () => {
    menu_wrapper.classList.toggle('right_0')
    body_hidden.classList.toggle('body_hide')
})