import {
    deleteData,
    updateCount,
    sortdata,
    eventListener,
    restoreData,
  } from '../components/common.js'

  let pageKey = 'candidateData'
  
  window.addEventListener('load', () => {
    
    let qualified = JSON.parse(localStorage.getItem(pageKey)) || []
    appendData(qualified, pageKey)
    updateCount(qualified)
  })
  const sort = document.querySelectorAll('.sort')
  sort.forEach((ele) => {
    ele.addEventListener('click', () => {
      let data = sortdata(ele.id, pageKey)
      appendData(data, pageKey)
    })
  })
  
  let appendData = (arr,key)=>{
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = null
    if(arr.length == 0){
        return
    }
    arr.forEach((ele,index) => {
        let {name,qualification,experience,job,stage,score} = ele
        const row = document.createElement('tr');
        const n = eventListener(ele)
        const qual = eventListener(ele)
        const exp = eventListener(ele)
        const j = eventListener(ele)
        const st = eventListener(ele)
        const sc = eventListener(ele)
        n.innerText = name
        qual.innerText = qualification
        exp.innerText = experience
        j.innerText = job
        st.innerText = stage
        sc.innerText = score
        row.append(n,qual,exp,j,st,sc)
        tbody.append(row)
    });
}
  