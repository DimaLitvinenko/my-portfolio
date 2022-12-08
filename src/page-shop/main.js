import '../scss/main.scss'
import './page.scss'

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-shop')
})
const navBar = document.querySelector('.navbar')
const menuBtn = document.querySelector('.burger')
const body = document.querySelector('body')

menuBtn.classList.add('unToggled')

menuBtn.addEventListener('click', e => {
  menuBtn.classList.toggle('toggled')
  menuBtn.classList.toggle('unToggled')
  navBar.classList.toggle('show-navbar')
  body.classList.toggle('overlay')
})
