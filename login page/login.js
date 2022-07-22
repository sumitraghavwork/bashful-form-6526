
let getdata=async()=>{
    let arr=[]
let loginurl=`https://masai-api-mocker.herokuapp.com/auth/login`
let uname=document.getElementById("user_email").value
let pass=document.getElementById("user_pass").value
  
let logindata=new login(pass,uname)
    // console.log(logindata)
let res=await fetch(loginurl,{

    method:"POST",
    body:JSON.stringify(logindata),
    headers:{
        "Content-Type":"application/json"
    },
});
let data=await res.json()
if(data.error==false){
    alert("Login Sucess")
    arr.push(logindata.username)
    // console.log(arr)
    localStorage.setItem("user_name",JSON.stringify(arr))
     
}
else{
    alert("check Credentials")
}
}

class login{
    constructor(u,p){
        
        this.password=p
        this.username=u;
    }
}