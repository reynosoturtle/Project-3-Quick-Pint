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

var sortDistance = function (order) {
  var list = document.getElementById('bars-list');

  var nodesToSort  = list.querySelectorAll('.card-container');
  Array.prototype.map.call(nodesToSort, function(node) {
    return {
      node: node,
      relevantText: node.children[0].children[0].children[1].querySelector('.latLong').innerHTML
    };
  }).sort(function(a, b) {
    // console.log(a, b);
    if (order == 'asc') {
      return a.relevantText.localeCompare(b.relevantText);
    } else if (order == 'desc') {
      return b.relevantText.localeCompare(a.relevantText);
    }
  }).forEach(function(item) {
    list.appendChild(item.node);
  });
}

var sortPrice = function (order) {
  var list = document.getElementById('bars-list');

  var nodesToSort  = list.querySelectorAll('.card-container');
  Array.prototype.map.call(nodesToSort, function(node) {
    return {
      node: node,
      relevantText: node.children[0].children[0].children[1].querySelector('.price').innerHTML
    };
  }).sort(function(a, b) {
    // console.log(a, b);
    if (order == 'asc') {
      return a.relevantText.localeCompare(b.relevantText);
    } else if (order == 'desc') {
      return b.relevantText.localeCompare(a.relevantText);
    }
  }).forEach(function(item) {
    list.appendChild(item.node);
  });
}

var filteringPrice = function (selectValue) {
  var list = document.getElementById('bars-list');

  var nodesToFilter  = list.querySelectorAll('.card-container');
  Array.prototype.map.call(nodesToFilter, function(node) {
    return {
      node: node,
      relevantText: node.children[0].children[0].children[1].querySelector('.price').innerHTML.replace('$', '')
    };
  }).forEach(function(item) {
    if (selectValue == 1) {
      item.node.style.display = 'block'
    } else if (selectValue == 2) {
      if (item.relevantText < '10') {
        item.node.style.display = 'block'
      } else {
        item.node.style.display = 'none'
      }
    } else if (selectValue == 3) {
      if (item.relevantText < '20') {
        item.node.style.display = 'block'
      } else {
        item.node.style.display = 'none'
      }
    } else if (selectValue == 4) {
      if (item.relevantText > '20') {
        item.node.style.display = 'block'
      } else {
        item.node.style.display = 'none'
      }
    }
  });
}

var filteringDistance = function (selectValue) {
  var list = document.getElementById('bars-list');

  var nodesToFilter  = list.querySelectorAll('.card-container');
  Array.prototype.map.call(nodesToFilter, function(node) {
    return {
      node: node,
      relevantText: node.children[0].children[0].children[1].querySelector('.latLong').innerHTML
    };
  }).forEach(function(item) {
    if (selectValue == 1) {
      item.node.style.display = 'block'
    } else if (selectValue == 2) {
      if (item.relevantText < '500') {
        item.node.style.display = 'block'
      } else {
        item.node.style.display = 'none'
      }
    } else if (selectValue == 3) {
      if (item.relevantText < '1000') {
        item.node.style.display = 'block'
      } else {
        item.node.style.display = 'none'
      }
    } else if (selectValue == 4) {
      if (item.relevantText > '1000') {
        item.node.style.display = 'block'
      } else {
        item.node.style.display = 'none'
      }
    }
  });
}

var getFilterAndSort = function() {
  var filterDistance = document.getElementById('filterDistance').value
  var filterPrice = document.getElementById('filterPrice').value
  var sortBy = document.getElementById('sortBy').value
  var sortValue = document.getElementById('sortValue').value

  if (filterDistance == 1) {
    //show all
    filteringDistance(1)
  } else if (filterDistance == 2) {
    //less than 500
    filteringDistance(2)
  } else if (filterDistance == 3) {
    //less than 1000
    filteringDistance(3)
  } else if (filterDistance == 4) {
    //more than 1000
    filteringDistance(4)
  }

  if (filterPrice == 1) {
    //show all
    filteringPrice(1)
  } else if (filterPrice == 2) {
    //less than 10
    filteringPrice(2)
  } else if (filterPrice == 3) {
    //less than 20
    filteringPrice(3)
  } else if (filterPrice == 4) {
    //more than 20
    filteringPrice(4)
  }

  if (sortBy == 1) {
    //distance
    if (sortValue == 1) {
      //lowest to highest
      sortDistance('asc');
    } else if (sortValue == 2) {
      //highest to lowest
      sortDistance('desc');
    }
  } else if (sortBy == 2) {
    //price
    if (sortValue == 1) {
      //lowest to highest
      sortPrice('asc');
    } else if (sortValue == 2) {
      //highest to lowest
      sortPrice('desc');
    }
  }

  opt = document.getElementById('options')
  image = document.getElementById('burgerIcon')
  searchIcon = document.getElementById('search-icon')
  optionsIcon = document.getElementById('options-icon')

  // Close filter/sort and show buttons
  opt.style.display = 'none'
  searchIcon.style.display = 'block'
  optionsIcon.style.display = 'block'
  image.src = './assets/hamburger.png'
}
