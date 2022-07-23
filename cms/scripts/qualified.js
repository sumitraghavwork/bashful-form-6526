import {
    deleteData,
    updateCount,
    sortdata,
    eventListener,
    restoreData,
  } from '../components/common.js'
  
  window.addEventListener('load', () => {
    let qualified = JSON.parse(localStorage.getItem('qualified')) || []
    appendData(qualified, 'qualified')
    updateCount(qualified)
  })
  const sort = document.querySelectorAll('.sort')
  sort.forEach((ele) => {
    ele.addEventListener('click', () => {
      let data = sortdata(ele.id, 'qualified')
      appendData(data, 'qualified')
    })
  })
  
  let appendData = (arr, key) => {
    const tbody = document.querySelector('tbody')
    tbody.innerHTML = null
    if (arr.length == 0) {
      return
    }
    arr.forEach((ele, index) => {
      let { name, qualification, experience, job, stage, score } = ele
      const row = document.createElement('tr')
      const n = eventListener(ele)
      const qual = eventListener(ele)
      const exp = eventListener(ele)
      const j = eventListener(ele)
      const st = eventListener(ele)
      const sc = eventListener(ele)
  
      const res = document.createElement('td')
      res.style.backgroundColor = 'green'
      res.innerText = 'Hire'
      res.addEventListener('click', () => {
        let data = restoreData(ele, index, key, 'hired')
        appendData(data, key)
        alert(`Hiring Mail sent to ${name} email Succesfully`)
      })
  
      const del = document.createElement('td')
      del.style.backgroundColor = 'red'
      del.innerText = 'Remove'
      del.addEventListener('click', () => {
        let data = deleteData(ele, index, key)
        appendData(data, key)
      })
  
      n.innerText = name
      qual.innerText = qualification
      exp.innerText = experience
      j.innerText = job
      st.innerText = stage
      sc.innerText = score
      row.append(n, qual, exp, j, st, sc, res, del)
      tbody.append(row)
    })
  }
  