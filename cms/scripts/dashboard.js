// import {deleteData,updateCount,eventListener} from '../components/export.js'

window.addEventListener('load',()=>{
    let candidateData = JSON.parse(localStorage.getItem('candidateData')) || []
    appendData(candidateData,'candidateData')
    updateCount(candidateData)
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
        // const del = document.createElement('td');
        // del.style.backgroundColor = 'red'
        // del.innerText = "Remove"
        // del.addEventListener('click',()=>{
        //     deleteData(ele,index,key)
        // })
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

let sortdata = (dataType)=>{
    let candidateData = JSON.parse(localStorage.getItem('candidateData')) || []
    let sorted ;
    if(dataType=='experience'||dataType=='score'){
        sorted = candidateData.sort((a,b)=>a[dataType] - b[dataType])
        console.log(sorted)
        appendData(sorted,'candidateData')
        return
    }
    sorted = candidateData.sort((a,b)=>{
        if(a[dataType] > b[dataType]) return 1
        if(a[dataType] < b[dataType]) return -1
        return 0
    })
    console.log(sorted)
    appendData(sorted)
}
let deleteData = (ele,id,key)=>{
    let data = JSON.parse(localStorage.getItem(`${key}`))
    // console.log(data)
    event.target.parentNode.remove()
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