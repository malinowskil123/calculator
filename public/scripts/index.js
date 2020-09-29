const debounce = (func, wait = 50) => {
  let timeout

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

const setClientHeight = () => {
  console.log('hit')
  const clientHeight = window.innerHeight
  $('body').css('height', clientHeight)
}

window.onload = setClientHeight

const setClientHeightDebounced = debounce(setClientHeight)

window.addEventListener('resize', setClientHeightDebounced)
