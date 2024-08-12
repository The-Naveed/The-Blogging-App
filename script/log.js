const log = () => {
const eMail = document.getElementById("mail").value
const password = document.getElementById("pass").value
console.log(eMail,password)
localStorage.setItem("User Email" , eMail)
localStorage.setItem("User Password" , password)
}

const sign = () => {
    window.location.replace("../pages/sign.html")}

window.sign = sign
window.log = log