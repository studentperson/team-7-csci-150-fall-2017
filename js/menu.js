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
allforms.push(header);
var errorDiv = document.getElementById("error");
//get buttons
var loginbtn = document.getElementById("loginbtn");
var register = document.getElementById("register");
var logout = document.getElementById("logout");
var detect = document.getElementById("detect");
var selectbtn = document.getElementById("selbtn");
var manual = document.getElementById("manual");
var selEntry = document.getElementById("selEntry");
var home = document.getElementById("home");
var manEncrypt = document.getElementById("encrypt");
var manDecrypt = document.getElementById("decrypt");
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
//////////Goes to the main page if logged in//////////
home.addEventListener("click", function() {
    loadPage("main_menu");
    sendError("");
});

//////////Logs in, basic check for valid email send password and email//////////
loginbtn.addEventListener("click", function() {
    var error = "";
    //regex to check for basic valid email
    if (/\S+@\S+\.\S+/.test(username.value)) {
        if (isRegistering) {
            if (password.value == confirmpass.value) {
                //regiser key to server and store login
                isLoggedin = registerUsr(username.value, password.value);
            }
            else {
                error = "Passwords do not match"; //put into error div
            }
            confirmpass.value = "";
        }
        else {
            //send to login check
            isLoggedin = loginUsr(username.value, password.value);
        }
    }
    else {
        error = "Invalid Email"; //put into error div
    }
    if (isLoggedin) {
        loginform.style.display = "none";
        mainMenu.style.display = "block";
        header.style.display = "block";
        password.value = "";
    }
    sendError(error);
});

//////////Changes login to register//////////
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
    sendError("");
});

//////////Logs user out//////////
logout.addEventListener("click", function() {
    isLoggedin = false;
    //add logout function
    for(var x = 0; x < allforms.length; x++) allforms[x].style.display = "none";
    loginform.style.display = "block";
    sendError("");
});

//////////Opens the manual encryption input//////////
manual.addEventListener("click", function() {
    mainMenu.style.display = "none";
    manualEncrypt.style.display = "block";
    sendError("");
});

manEncrypt.addEventListener("click", function(){
    if (/\S+@\S+\.\S+/.test(manRecipient.value)) {
        encrypt(manRecipient.value, manBody.value);
        sendError("");
    } else sendError("Invalid Email")
});

manDecrypt.addEventListener("click", function(){
    decrypt(username.value, manBody.value);
    sendError("");
});

//////////Opens the email input for selected input//////////
selectbtn.addEventListener("click", function() {
    selectbtn.style.display = "none";
    selInputDiv.style.display = "block";
    sendError("");
});

//////////-----Add code to detect-----//////////
detect.addEventListener("click", function() {
    //detect the email body and recipient and encrypt or call function----replace values
    var recipient = "email@recipient.thing";
    var message = "Replace me with email body";
    var encrypted = encrypt(recipient, message);
    sendError("");
});

//////////Sends email and selected text to encrypt//////////
selEntry.addEventListener("click", function(){
    var message = "Replace me with selected text";
    var recipient = selRecipient.value;
    if (/\S+@\S+\.\S+/.test(recipient)) {
        var encrypted = encrypt(recipient, message);
        selectbtn.style.display = "block";
        selInputDiv.style.display = "none";
        selRecipient.value = "";
        sendError("");
    } else {
        console.log("invalid");
        sendError("Invalid Email");
    }
});


//////////Loads page baised on page ID//////////
//if empty string just goes to home (login before calling)
function loadPage(page) {
    for (var i in allforms) {
        if (page == allforms[i].id && isLoggedin) {
            allforms[i].style.display = "block";
        }
        else allforms[i].style.display = "none";
    }
    //check if logged in
    if (isLoggedin) {
        if (page == "") {
            mainMenu.style.display = "block";
        }
        header.style.display = "block";
        selectbtn.style.display = "block";
    }
    else loginform.style.display = "block";
}

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
    return "Encrypted text";
}

function decrypt(sender, message) {//move to background
    //do the encryption
    return "Decrypted text";
}

function sendError(error) {
    if (error) errorDiv.innerHTML = "<p>" + error + "</p>";
    else errorDiv.innerHTML = "";
}