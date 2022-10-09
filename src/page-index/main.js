import '../scss/main.scss'
import './page.scss'
import '../img/logo_angry-dog.png'
import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')
// import 'normalize.css/normalize.css'

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded', 'page-index')
})

window.Foo = Foo.instance()
window.Bar = Bar()
// console.log(window.Foo.getValue())
// console.log(window.Bar)

// const menuToggle = document.querySelector('.menu-toggle')
const bxMenu = document.querySelector('.bx-menu')
const bxX = document.querySelector('.bx-x')
const navBar = document.querySelector('.navbar')

// --- open menu ---
bxMenu.addEventListener('click', e => {
  if (e.target.classList.contains('bx-menu')) {
    navBar.classList.add('show-navbar')
    bxMenu.classList.add('hide-bx')
    bxX.classList.add('show-bx')
  }
})

// --- close menu ---
bxX.addEventListener('click', e => {
  if (e.target.classList.contains('bx-x')) {
    navBar.classList.remove('show-navbar')
    bxMenu.classList.remove('hide-bx')
    bxX.classList.remove('show-bx')
  }
})
