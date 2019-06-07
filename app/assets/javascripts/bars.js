// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var toggleNav = function () {
  nav = document.getElementById('nav')
  opt = document.getElementById('options')
  burger = document.getElementById('burgerIcon')
  // searchIcon = document.getElementById('search-icon')
  optionsIcon = document.getElementById('options-icon')
  console.log(burger.src)
  console.log(window.location.origin + '/assets/hamburger.png')

  if (burger.src == window.location.origin + '/assets/hamburger.png') {
    nav.style.display = 'block'
    burger.src = window.location.origin + '/assets/close.png'
    // searchIcon.style.display = 'none'
    optionsIcon.style.display = 'none'
  } else if (burger.src == window.location.origin + '/assets/close.png') {
    nav.style.display = 'none'
    opt.style.display = 'none'
    // searchIcon.style.display = 'block'
    optionsIcon.style.display = 'block'
    burger.src = window.location.origin + '/assets/hamburger.png'
  }
}

var toggleOpt = function () {
  opt = document.getElementById('options')
  burger = document.getElementById('burgerIcon')
  // searchIcon = document.getElementById('search-icon')
  optionsIcon = document.getElementById('options-icon')
  if (opt.style.display == 'none') {
    opt.style.display = 'block'
    // searchIcon.style.display = 'none'
    optionsIcon.style.display = 'none'
    burger.src = './assets/close.png'
  }
}

function filterDistanceValue(value){
  if (value == 2) {
    return 1000
  } else if (value == 3) {
    return 5000
  } else if (value == 4) {
    return 10000
  } else {
    return Infinity
  }
}

function filterPriceValue(value){
  if (value == 2) {
    return 10
  } else if (value == 3) {
    return 20
  } else if (value == 4) {
    return 30
  } else {
    return Infinity
  }
}

function filterAndSort() {
  const filterCriteria = {
    filterDistance: filterDistanceValue(document.getElementById('filterDistance').value),
    filterPrice: filterPriceValue(document.getElementById('filterPrice').value),
    sortBy: document.getElementById('sortBy').value,
    sortValue: document.getElementById('sortValue').value,
  }
  console.log("filterCriteria object")
  console.log(filterCriteria);
  const list = document.getElementById('bars-list');
  const cards = document.querySelectorAll('.card-container');

  Array.prototype.map.call(cards, function(node) {
    return {
      node: node,
      distanceText: parseFloat(node.children[0].children[0].children[1].querySelector('.latLong').innerHTML.replace(' m', '')),
      priceText: parseFloat(node.children[0].children[0].children[1].querySelector('.price').innerHTML.replace('$', ''))
    };
    }).sort(function(a, b) {
      //sort by distance
    if (filterCriteria.sortBy == 1) {
      if (filterCriteria.sortValue == 1) {
        //sort from lowest to highest
        console.log('sorting DISTANCE low to high')
        return a.distanceText - b.distanceText
      } else {
        //sort from highest to lowest
        console.log('sorting DISTANCE high to low')
        return b.distanceText - a.distanceText
      }
    } else if (filterCriteria.sortBy == 2) {
      if (filterCriteria.sortValue == 1) {
        console.log('sorting PRICE low to high')
        return a.priceText - b.priceText
      } else {
        console.log('sorting PRICE high to low')
        return b.priceText - a.priceText
      }
    }
    }).forEach(function(item) {
        list.appendChild(item.node);
        console.log('item price', item.priceText)
        console.log('filter criteria', filterCriteria.filterPrice)
        console.log('testing condition', parseFloat(item.priceText) > filterCriteria.filterPrice)
        item.node.style.display = 'block'
        // console.log(parseFloat(item.distanceText))

        if (parseFloat(item.distanceText) > filterCriteria.filterDistance) {
          item.node.style.display = 'none'
        }

        if (parseFloat(item.priceText) > filterCriteria.filterPrice) {
          item.node.style.display = 'none'
          console.log('hide', item)
        }
    });
  opt = document.getElementById('options')
  image = document.getElementById('burgerIcon')
  // searchIcon = document.getElementById('search-icon')
  optionsIcon = document.getElementById('options-icon')

  // Close filter/sort and show buttons
  opt.style.display = 'none'
  // searchIcon.style.display = 'block'
  optionsIcon.style.display = 'block'
  image.src = './assets/hamburger.png'
}