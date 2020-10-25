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
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}
