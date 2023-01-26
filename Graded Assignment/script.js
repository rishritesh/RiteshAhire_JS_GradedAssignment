import template from './template.json' assert {type:'json'};
let login=document.getElementById("login");
let userName=document.getElementById("username");
let password=document.getElementById("password");
let error=document.getElementById("error");
error.style.display="none"

login.addEventListener('click',()=>{
    //console.log(userName.value)

    if(userName.value===localStorage.getItem("userName") && (password.value===localStorage.getItem("password"))){
        console.log("login")
       
       document.location.href="http://127.0.0.1:5500/template.html"
    }
    else{
    
        error.style.display="block"
        error.innerText="Invalid UserName or Password"
    }
    
    if(userName.value=="" || password.value===""){
        error.style.innerText="block";
        error.innerText="Enter userName or Password"
    }

})
console.log(template)

localStorage.setItem("userName","admin")
localStorage.setItem("password","123")