// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// console.log("hi")

// var toggle = function () {
//   image = document.getElementById('burgerIcon')
//   url = window.location.href
//   if (image.src == url + 'assets/hamburger.png') {
//     image.src = './assets/close.png'
//     console.log("opening")
//   } else if (image.src == url + 'assets/close.png') {
//     image.src = './assets/hamburger.png'
//     console.log("closing")
//   }
//     console.log(window.location.href)
// }

var toggleNav = function () {
  nav = document.getElementById('nav')
  opt = document.getElementById('options')
  image = document.getElementById('burgerIcon')
  console.log(image.src)
  console.log(window.location.origin + '/assets/hamburger.png')

  if (image.src == window.location.origin + '/assets/hamburger.png') {
    nav.style.display = 'block'
    image.src = './assets/close.png'
  } else if (image.src == window.location.origin + '/assets/close.png') {
    nav.style.display = 'none'
    opt.style.display = 'none'
    image.src = './assets/hamburger.png'
  }
}

var toggleOpt = function () {
  opt = document.getElementById('options')
  image = document.getElementById('burgerIcon')
  if (opt.style.display == 'none') {
    opt.style.display = 'block'
    image.src = './assets/close.png'
  }
}