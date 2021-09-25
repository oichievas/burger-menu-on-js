const toogle = document.querySelector('.toogle')
const nav = document.querySelector('nav')

toogle.addEventListener('click', e => {
    e.preventDefault();

    nav.classList.toggle('active')
})