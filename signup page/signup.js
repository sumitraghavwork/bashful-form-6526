
  
let ip=(id)=>{
   return document.getElementById(id).value
}

let userip=async()=>{ 
    let Cname=ip("admin_company_name")
    let user_first_name=ip("first_name")
    let last_name=ip("last_name")
    let email=ip("user_email")
    let phone_no=ip("user_no")
    let password=ip("user_pass")
    let userdata=new signup(Cname,user_first_name,email,password,phone_no,last_name)
    
    let serverlink=`https://masai-api-mocker.herokuapp.com/auth/register`
   
    let res=await fetch(serverlink,{
      method:"POST",
      body:JSON.stringify(userdata),
      headers:{
        "Content-Type":"application/json"
      },

    });
 let data=await res.json()
 if(data.error==false){
    alert("Register Successful")
 
    window.location.href="../login page/login.html"
 }
 else{
    alert("chek credential")
 }


}

class signup{
    constructor(n,u,e,p,m,d){
        this.name=n;
        this.username=u;
        this.email=e;
        this.password=p
        this.mobile=m
        this.description=d
    }
}