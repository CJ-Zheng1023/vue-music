export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let classes = el.className.split(' ')
  classes.push(className)
  el.className = classes.join(' ')
}

function hasClass(el, className) {
  let reg = new RegExp(className)
  return reg.test(el.className)
}
