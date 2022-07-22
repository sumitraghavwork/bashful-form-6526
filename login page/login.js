
let getdata=async()=>{
    let arr=[]
let loginurl=`https://masai-api-mocker.herokuapp.com/auth/login`
let uname=document.getElementById("user_name").value
let pass=document.getElementById("user_pass").value
  
let logindata=new login(pass,uname)
     //console.log(logindata)
let res=await fetch(loginurl,{

    method:"POST",
    body:JSON.stringify(logindata),
    headers:{
        "Content-Type":"application/json"
    },
});
let data=await res.json()
// console.log(data)

if(data.error==false){
    alert("Login Sucess")
    arr.push(uname)
    console.log(arr)
    localStorage.setItem("user_name",JSON.stringify(arr))
      window.location.href = '../cms/dashboard.html'
}
else{
    alert("check Credentials")
}
}

class login{
    constructor(p,u){
        this.username=u;
        this.password=p
        
    }
}