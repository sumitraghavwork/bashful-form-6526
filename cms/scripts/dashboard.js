import {appendData,deleteData,updateCount} from '../components/export.js'

window.addEventListener('load',()=>{
    let candidateData = JSON.parse(localStorage.getItem('candidateData')) || []
    appendData(candidateData,'candidateData')
    updateCount(candidateData)
})

