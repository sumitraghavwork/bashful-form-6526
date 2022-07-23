export { deleteData,eventListener,sortdata,updateCount,restoreData}

let restoreData = (ele, id, key,key2) => {
    let data = JSON.parse(localStorage.getItem(`${key}`))
    // console.log(data)
    event.target.parentNode.remove()
    let filtered = data.filter((el, i) => {
      return i != id
    })
    console.log(filtered)
    localStorage.setItem(`${key}`, JSON.stringify(filtered))
    updateCount(filtered)
    let nextData = JSON.parse(localStorage.getItem(`${key2}`)) || []
    console.log(key2,nextData)
    ele.stage = key2
    nextData.push(ele)
    localStorage.setItem(`${key2}`, JSON.stringify(nextData))
    return filtered
    
}
  let deleteData = (ele, id, key) => {
    let data = JSON.parse(localStorage.getItem(`${key}`))
    // console.log(data)
    event.target.parentNode.remove()
    let filtered = data.filter((el, i) => {
      return i != id
    })
    console.log(filtered)
    localStorage.setItem(`${key}`, JSON.stringify(filtered))
    updateCount(filtered)
    let trashData = JSON.parse(localStorage.getItem(`trashData`)) || []
    trashData.push(ele)
    localStorage.setItem(`trashData`, JSON.stringify(trashData))
    return filtered
    
  }
  let eventListener = (ele) => {
    let element = document.createElement('td')
    element.addEventListener('click', () => {
      let temp = []
      temp.push(ele)
      localStorage.setItem('candidate', JSON.stringify(temp))
      window.location.href = './candidate.html'
    })
    return element
  }
  let sortdata = (dataType,key) => {
      let candidateData = JSON.parse(localStorage.getItem(`${key}`)) || []
      let sorted
      if (dataType == 'experience' || dataType == 'score') {
        sorted = candidateData.sort((a, b) => a[dataType] - b[dataType])
        console.log(sorted)
        return sorted
      }
      sorted = candidateData.sort((a, b) => {
        if (a[dataType].toLowerCase() > b[dataType].toLowerCase()) return 1
        if (a[dataType].toLowerCase() < b[dataType].toLowerCase()) return -1
        return 0
      })
      console.log(sorted)
      return sorted

  }
  let updateCount = (arr) => {
    const candidate_count = document.getElementById('candidate_count')
    candidate_count.innerText = arr.length
  }