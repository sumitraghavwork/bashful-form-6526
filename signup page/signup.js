let ip = (id) => {
  return document.getElementById(id).value
}

let userip = async () => {
  let Cname = ip('cname')
  let email = ip('ename')
  let pass = ip('mypassword')
  let username = ip('ename')
  let phone = ip('user_no')
  let des = ip('First_name')

  let userdata = new signup(Cname, email, pass, username, phone, des)
  console.log(userdata)

  let serverlink = `https://masai-api-mocker.herokuapp.com/auth/register`

  let res = await fetch(serverlink, {
    method: 'POST',
    body: JSON.stringify(userdata),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  let data = await res.json()
  if (data.error == false) {
    alert('Registeration Successful')

    window.location.href = '../login page/login.html'
  } else {
    alert('check credentials')
  }
}

class signup {
  constructor(n, e, p, u, m, d) {
    this.name = n
    this.email = e
    this.password = p
    this.username = u
    this.mobile = m

    this.description = d
  }
}
