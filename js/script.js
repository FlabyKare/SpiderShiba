const menu_btn = document.querySelector('.mobile_menu')
const menu_wrapper = document.querySelector('.mobile_menu_wrapper')
const menu_close = document.querySelector('.closeMenu')
const body_hidden = document.querySelectorAll(".mobile_opened");

menu_btn.addEventListener('click', () => {
    menu_wrapper.classList.toggle('right_0')
    appenedClasses()
})
menu_close.addEventListener('click', () => {
    menu_wrapper.classList.toggle('right_0')
    appenedClasses()
})

const appenedClasses = ()=>{
    body_hidden.forEach((item) => {
        item.classList.toggle('body_hide')
      });
}