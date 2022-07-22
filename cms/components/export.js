export { appendData,deleteData,updateCount ,eventListener}

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
        const del = document.createElement('td');
        del.style.backgroundColor = 'red'
        del.innerText = "Remove"
        del.addEventListener('click',()=>{
            deleteData(ele,index,key)
        })
        n.innerText = name
        qual.innerText = qualification
        exp.innerText = experience
        j.innerText = job
        st.innerText = stage
        sc.innerText = score
        row.append(n,qual,exp,j,st,sc,del)
        tbody.append(row)
    });
}

let deleteData = (ele,id,key)=>{
    let data = JSON.parse(localStorage.getItem(`${key}`))
    event.target.parentNode.remove()
    // console.log(data)
    // console.log(key)
    let filtered = data.filter((el,i)=>{
        return i!=id
    })
    console.log(filtered)
    localStorage.setItem(`${key}`,JSON.stringify(filtered))
    appendData(filtered,key)
    updateCount(filtered)
    let trashData = JSON.parse(localStorage.getItem(`trashData`)) || []
    trashData.push(ele)
    localStorage.setItem(`trashData`, JSON.stringify(trashData))
}

let eventListener=(ele)=>{
    let element = document.createElement('td');
    element.addEventListener('click',()=>{
        let temp = []
        temp.push(ele)
        localStorage.setItem('candidate',JSON.stringify(temp))
        // window.location.href = './candidate.html'
    })
    return element
}
let updateCount=(arr)=>{
    const candidate_count = document.getElementById('candidate_count');
    candidate_count.innerText = arr.length
}