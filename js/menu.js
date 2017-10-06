////get Elements
//get forms
var loginfrm = document.getElementById("login");
var mainMenu = document.getElementById("main_menu");
var manualEncrypt = document.getElementById("manualEncrypt");
var confirm = document.getElementById("confirm");
var selInputDiv = document.getElementById("selInputDiv");
//get buttons
var loginbtn = document.getElementById("loginbtn");
var register = document.getElementById("register");
var logout = document.getElementById("logout");
var detect = document.getElementById("detect");
var selectbtn = document.getElementById("selbtn");
var manual = document.getElementById("manual");
var selEntry = document.getElementById("selEntry");
//get inputs
var username = document.getElementById("usrname");
var password = document.getElementById("password");
var confirmpass = document.getElementById("confirmpass");
var manBody = document.getElementById("manBody");
var manRecipient = document.getElementById("manRecipient");
var selRecipient = document.getElementById("selRecipient");


var isRegistering = false;

loginbtn.addEventListener("click", function(){
    var success = false;
    console.log("login");
    if (isRegistering) {
        if (password.value == confirmpass.value) {
            //regiser key to server and store login
            success = registerUsr(username.value, password.value);
        } else {
            console.log("invalid password");
        }
    } else {
        //add login check here
        success = loginUsr(username.value, password.value);
    }
    //check if valid email
    //insert regex or so
    if (success) {
        loginfrm.style.display = "none";
        mainMenu.style.display = "block";
    }
});

register.addEventListener("click", function(){
    console.log("register");
    isRegistering = !isRegistering;
    if (isRegistering) {
        confirm.style.display = "block";
        register.setAttribute("value", "Cancel");
        loginbtn.setAttribute("value", "Register");
    } else {
        confirm.style.display = "none";
        register.setAttribute("value", "Register");
        loginbtn.setAttribute("value", "Login");
    }
});

logout.addEventListener("click", function(){
    console.log("logout");
    //add logout function
    loginfrm.style.display = "block";
    mainMenu.style.display = "none";
});

manual.addEventListener("click", function(){
   console.log("raw");
   mainMenu.style.display = "none";
   manualEncrypt.style.display = "block";
   var encrypted = encrypt(manRecipient.value, manBody.value);
});

detect.addEventListener("click", function(){
    //detect the email body and recipient and encrypt or call function
    var recipient = "email@recipient.thing";
    var message = "Replace me with email body";
    
});

selectbtn.addEventListener("click", function(){
    selectbtn.style.display = "none";
    selInputDiv.style.display = "block";
});

selEntry.addEventListener("click", function(){
    var message = "Replace me with selected text";
    var recipient = selRecipient.value;
    //var encrypted = encrypt(recipient, message);
    selectbtn.style.display = "block";
    selInputDiv.style.display = "none";
});

function registerUsr(username) {
    var success = true;
    return success;
}
function loginUsr(username, password) {
    var success = true;
    return success;
}
function encrypt(recipient, message) {//move to background
    //do the encryption
    return "encrypted text";
}