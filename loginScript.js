function compareLogin(event) {
    event.preventDefault();

    const USERNAME = "zhin";
    const PASSWORD = "332868900";
    
    const userName = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errMessage = document.getElementById("errMessage");

    if (userName === USERNAME && password === PASSWORD) {
        alert("tama");
        window.location.href = "message.html";
    } else {
        alert("mali");
        errMessage.textContent = "Invalid Username or Password!";
    }
}

const myLogInButton = document.getElementById("btnLogin");
myLogInButton.addEventListener("click", compareLogin);
