import condition from '../components/condition.js'

let temp = document.getElementById('mypassword')
temp.addEventListener('focusin', func1)

function func1() {
  if (temp.value == '') {
    document.getElementById('condition').innerHTML = condition()
  }
}

temp.addEventListener('input', func2)
function func2() {
  let lower = 'abcdefghijklmnopqrstuvwxyz'
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let data = temp.value
  if (data.length >= 8) {
    document.getElementById('right1').src = 'svg/done.png'
  } else {
    document.getElementById('right1').src =
      'svg/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.png'
  }
  let mylower = false
  for (let i = 0; i < data.length; ++i) {
    let bool = false
    for (let j = 0; j < lower.length; ++j) {
      if (data[i] == lower[j]) {
        mylower = true
        bool = true
        break
      }
    }
    if (bool) {
      break
    }
  }

  let myupper = false
  for (let i = 0; i < data.length; ++i) {
    let _bool = false
    for (let j = 0; j < upper.length; ++j) {
      if (data[i] == upper[j]) {
        myupper = true
        _bool = true
        break
      }
    }
    if (_bool) {
      break
    }
  }
  if (myupper && mylower) {
    document.getElementById('right2').src = 'svg/done.png'
    document.getElementById('right2').src = 'svg/done.png'
  } else {
    document.getElementById('right2').src =
      'svg/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.png'
    document.getElementById('right2').src =
      'svg/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.png'
  }

  let isNumber = false
  for (let p = 0; p < data.length; ++p) {
    let num = +data[p]
    if (num - -1) {
      isNumber = true
      break
    }
  }
  if (isNumber) {
    document.getElementById('right3').src = 'svg/done.png'
  } else {
    document.getElementById('right3').src =
      'svg/arrow_right_alt_FILL0_wght400_GRAD0_opsz48.png'
  }
}

let myemail = document.getElementById('ename')
myemail.addEventListener('focusout', email)
myemail.addEventListener('input', _email)
function email() {
  let temp = document.getElementById('ename').value
  if (temp == '') {
    document.getElementById('ewarn').innerText = `Please enter an email address`
    document.getElementById('ewarn').style.color = 'red'
  }
}

function _email() {
  document.getElementById('ewarn').innerText = ''
}

let mycompanyName = document.getElementById('cname')
mycompanyName.addEventListener('focusout', companyName)
mycompanyName.addEventListener('input', _companyName)
function companyName() {
  let temp = document.getElementById('cname').value
  if (temp == '') {
    document.getElementById(
      'cmnywarn',
    ).innerText = `Please enter the company name`
    document.getElementById('cmnywarn').style.color = 'red'
  }
}
function _companyName() {
  document.getElementById('cmnywarn').innerText = ''
}
