function compareLogin(event){
    event.preventDefault(); 
    
    const USERNAME = "zhin";
    const PASSWORD = "332868900";
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errMessage = document.getElementById("errorMessage").value;
    if(userName===USERNAME && password ===password){
        alert("tama");
        window.location.href = "message.html";
    }else{
        alert("mali");
        errMessage.textContent = "Invalid Username or Password!";
        
       
    }
}

const myLogInButton = document.getElementById("btnLogIn");
myLogInButton.addEventListener('click',compareLogin);
