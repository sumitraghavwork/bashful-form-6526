let btn1=document.getElementById('btn1');
btn1.addEventListener('click',func1)
let btn2=document.getElementById('btn2');
btn2.addEventListener('click',func2)
let btn3=document.getElementById('btn3');
btn3.addEventListener('click',func3)
let btn4=document.getElementById('btn4');
btn4.addEventListener('click',func4);
function func1(){
    btn1.style.backgroundColor='#040e3c'
    btn1.style.color='white'
    btn2.style.backgroundColor='white'
    btn2.style.color='#04154a'
    btn3.style.backgroundColor='white'
    btn3.style.color='#04154a'
    btn4.style.backgroundColor='white'
    btn4.style.color='#04154a'
}
function func2(){
    btn2.style.backgroundColor='#040e3c'
    btn2.style.color='white'
    btn1.style.backgroundColor='white'
    btn1.style.color='#04154a'
    btn3.style.backgroundColor='white'
    btn3.style.color='#04154a'
    btn4.style.backgroundColor='white'
    btn4.style.color='#04154a'

    
}
function func3(){
    btn3.style.backgroundColor='#040e3c'
    btn3.style.color='white'
    btn2.style.backgroundColor='white'
    btn2.style.color='#04154a'
    btn1.style.backgroundColor='white'
    btn1.style.color='#04154a'
    btn4.style.backgroundColor='white'
    btn4.style.color='#04154a'
}
function func4(){
    btn4.style.backgroundColor='#040e3c'
    btn4.style.color='white'
    btn2.style.backgroundColor='white'
    btn2.style.color='#04154a'
    btn3.style.backgroundColor='white'
    btn3.style.color='#04154a'
    btn1.style.backgroundColor='white'
    btn1.style.color='#04154a'

}
function email(){
    let temp=document.getElementById('ename').value;
    if(temp==''){
        document.getElementById('ewarn').innerText=`Please complete this required field.`;
        document.getElementById('ewarn').style.color='red'
        
    }
}
function _email(){
    document.getElementById('ewarn').innerText='';
}
function companyName(){
    let temp=document.getElementById('cname').value;
    if(temp==''){
        document.getElementById('cmnywarn').innerText=`Please complete this required field.`;
        document.getElementById('cmnywarn').style.color='red';
    }
}
function _companyName(){
    document.getElementById('cmnywarn').innerText=''
}

function firstName(){
    let temp=document.getElementById('fname').value;
    if(temp==''){
        document.getElementById('fnwarn').innerText=` Required field.`;
        document.getElementById('fnwarn').style.color='red';
    }
}
function _firstName(){
    document.getElementById('fnwarn').innerText=''
}

function lastName(){
    let temp=document.getElementById('lname').value;
    if(temp==''){
        document.getElementById('lnwarn').innerText=` Required field.`;
        document.getElementById('lnwarn').style.color='red';
    }
}
function _lastName(){
    document.getElementById('lnwarn').innerText=''
}
