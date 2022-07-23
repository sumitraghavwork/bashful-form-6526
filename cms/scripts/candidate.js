window.addEventListener('load', () => {
  let candidate = JSON.parse(localStorage.getItem('candidate')) || []
  appendData(candidate)
})

let appendData = (arr) => {
  console.log(arr)
  const container = document.getElementById('candidate_details')
  container.innerHTML = null
  if (!arr) {
    return
  }
  arr.forEach((ele) => {
    let { id, name, qualification, experience, job, stage, score } = ele
    const candidate = document.getElementById('name')
    candidate.innerText = `Candidate ${name} details`
    let n = cre('p', name)
    let i = cre('p', id)
    let q = cre('p', qualification)
    let ex = cre('p', experience)
    let j = cre('p', job)
    let s = cre('p', stage)
    let sc = cre('p', score)
    container.append(n, i, q, ex, j, s, sc)
  })
}

let cre = (tag, text) => {
  let t = document.createElement(`${tag}`)
  t.setAttribute('class','pd bold')
  t.innerText = text
  return t
}
