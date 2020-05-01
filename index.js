function pushBtn(value) {
  let arithmetic = $('#inputLabel').html(),
    pushed = value.innerHTML
  if (pushed === '=') {
    if (isNaN(arithmetic[arithmetic.length - 1]) === false) {
      calculate(arithmetic)
      if (pushed != '=') {
        inputLabel.innerHTML = '0'
      }
    } else {
      alert('Syntax Err')
      $('#inputLabel').html('0')
    }
  } else if (pushed === 'AC') {
    inputLabel.innerHTML = '0'
  } else {
    if (inputLabel.innerHTML == '0') {
      inputLabel.innerHTML = pushed
    } else {
      inputLabel.innerHTML += pushed
    }
  }
}
const isWholeNumber = (num) => num === Math.round(num)
const calculate = (expression) => {
  console.log(expression)
  return isWholeNumber(eval(expression)) === false
    ? $('#inputLabel').html(eval(expression).toFixed(2))
    : $('#inputLabel').html(eval(expression))
}
