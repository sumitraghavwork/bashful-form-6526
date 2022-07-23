class Candidate{
    constructor(id,name,qualification,experience,job,stage,score){
        this.id = id
        this.name = name
        this.qualification = qualification
        this.experience = experience
        this.job = job
        this.stage = stage
        this.score = score
    }
}
class NewCandidate extends Candidate{
    constructor(id,name,qualification,experience,job,stage,score,image_url,email,mobile){
        super(id,name,qualification,experience,job,stage,score)
        this.image_url = image_url
        this.email = email
        this.mobile = mobile
    }
}


window.addEventListener('load',()=>{
    makeDashboardData()
})

let makeDashboardData = ()=>{
    let dummyData = JSON.parse(localStorage.getItem('dummyData')) || []
    let newCandidate = JSON.parse(localStorage.getItem('newCandidate')) || []
    let followed = JSON.parse(localStorage.getItem('followed')) || []
    let qualified = JSON.parse(localStorage.getItem('qualified')) || []
    let candidateData = JSON.parse(localStorage.getItem('candidateData')) || []
    if(newCandidate.length != 0 || followed.length != 0 || qualified.length != 0){
      candidateData = [...newCandidate,...followed,...qualified]
    }else{
      candidateData = [...dummyData]
    }
    console.log(candidateData)
    localStorage.setItem('candidateData',JSON.stringify(candidateData))
  }  




function openForm() {
    
    document.getElementById("myForm").style.display = "block";
    
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  let LSarr=  JSON.parse(localStorage.getItem('newCandidate')) || []
  cata=()=>{
    //  console.log("hello")
    let id=document.getElementById("one").value
    let name=document.getElementById("two").value
    let qualification=document.getElementById("three").value
    let exp=+document.getElementById("four").value
    let job=document.getElementById("five").value
    let stage=document.getElementById("six").value
    let score=+document.getElementById("seven").value
 let userdata=new Candidate(id,name,qualification,exp,job,stage,score)
      LSarr.push(userdata)
      localStorage.setItem("newCandidate",JSON.stringify(LSarr))
      alert(`${name}'s details saved Successfully`)
    //   document.getElementById("myForm").value=null
  }
