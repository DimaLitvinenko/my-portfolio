// import 'normalize.css/normalize.css'
// how to make filter list item?

// heroes.filter( s => //for every object in heroes
//     filters.every( t => { //check if every filter in iteration has the same value or not
//        const key = Object.keys(t)[0];
//        return s[key] == t[key]
//     })
// );

// const output = heroes.filter( function(s) {
//      return filters.every( function(t) {
//         const key = Object.keys(t)[0];
//         return s[key] == t[key]
//      });
// });

import '../scss/main.scss'
import './page.scss'
import '../img/logo_angry-dog.png'

import { Bar } from '../js/bar.es6'
const { Foo } = require('../js/foo.cjs')

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
