(function() {
  document.querySelector('*[data-target]').addEventListener('click', function(e) {
    var targetId = e.target.getAttribute('data-target')
    if (!targetId) {
      return
    }
    var targetEl = document.getElementById(targetId)

    if (hasClass(targetEl, 'is-active')) {
      targetEl.classList.remove('is-active')
    } else {
      targetEl.classList.add('is-active')
    }
  })

  function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1
  }

  let elList = document.querySelectorAll('.make-it-shown')

  elList.forEach((el) => {
    el.classList.add('hidden')
  })

  setTimeout(checkPosition)

  function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect()
    var elemTop = rect.top
    var elemBottom = rect.bottom

    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    var isVisible = elemTop < window.innerHeight && elemBottom >= 0
    return isVisible
  }

  function checkPosition() {
    elList.forEach((el) => {
      if (isScrolledIntoView(el)) {
        el.classList.remove('hidden')
      }
    })
  }
  function debounce(func, wait = 10, immediate = true) {
    let timeout
    return function() {
      let context = this, args = arguments
      let later = function() {
        timeout = null
        if (!immediate) func.apply(context, args)
      }
      let callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  window.addEventListener('scroll', debounce(checkPosition));
})()

