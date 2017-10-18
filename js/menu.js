////get Elements
//get forms
var allforms = [];
var loginform = document.getElementById("login");
allforms.push(loginform);
var mainMenu = document.getElementById("main_menu");
allforms.push(mainMenu);
var manualEncrypt = document.getElementById("manualEncrypt");
allforms.push(manualEncrypt);
var confirm = document.getElementById("confirm");
allforms.push(confirm);
var selInputDiv = document.getElementById("selInputDiv");
allforms.push(selInputDiv);
var header = document.getElementById("header");
//get buttons
var loginbtn = document.getElementById("loginbtn");
var register = document.getElementById("register");
var logout = document.getElementById("logout");
var detect = document.getElementById("detect");
var selectbtn = document.getElementById("selbtn");
var manual = document.getElementById("manual");
var selEntry = document.getElementById("selEntry");
var home = document.getElementById("home");
//get inputs
var username = document.getElementById("usrname");
var password = document.getElementById("password");
var confirmpass = document.getElementById("confirmpass");
var manBody = document.getElementById("manBody");
var manRecipient = document.getElementById("manRecipient");
var selRecipient = document.getElementById("selRecipient");
////Variables
var isRegistering = false;
var isLoggedin = false;

home.addEventListener("click", function() {
    for (var i in allforms) allforms[i].style.display = "none";
    //check if logged in
    if (isLoggedin) mainMenu.style.display = "block";
    else loginform.style.display = "block";
});


loginbtn.addEventListener("click", function() {
    console.log("login");
    //regex to check for basic valid email
    if (/\S+@\S+\.\S+/.test(username.value)) {
        if (isRegistering) {
            if (password.value == confirmpass.value) {
                //regiser key to server and store login
                isLoggedin = registerUsr(username.value, password.value);
            }
            else {
                console.log("invalid password"); //put into error div
            }
        }
        else {
            //send to login check
            isLoggedin = loginUsr(username.value, password.value);
        }
    }
    else {
        console.log("invalid email"); //put into error div
    }
    if (isLoggedin) {
        loginform.style.display = "none";
        mainMenu.style.display = "block";
        header.style.display = "block";
    }
});


register.addEventListener("click", function() {
    isRegistering = !isRegistering;
    if (isRegistering) {
        confirm.style.display = "block";
        register.setAttribute("value", "Cancel");
        loginbtn.setAttribute("value", "Register");
    }
    else {
        confirm.style.display = "none";
        register.setAttribute("value", "Register");
        loginbtn.setAttribute("value", "Login");
    }
});

logout.addEventListener("click", function() {
    isLoggedin = false;
    //add logout function
    loginform.style.display = "block";
    mainMenu.style.display = "none";
    header.style.display = "none";
});


manual.addEventListener("click", function() {
    mainMenu.style.display = "none";
    manualEncrypt.style.display = "block";
    var encrypted = encrypt(manRecipient.value, manBody.value);
});


selectbtn.addEventListener("click", function() {
    selectbtn.style.display = "none";
    selInputDiv.style.display = "block";
});


detect.addEventListener("click", function() {
    //detect the email body and recipient and encrypt or call function
    var recipient = "email@recipient.thing";
    var message = "Replace me with email body";

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
