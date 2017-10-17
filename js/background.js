////////////////////////////////////////////
///////////////User Variables///////////////
////////////////////////////////////////////
var privkey, pubkey; //Unencrypted private and public keys for this user
var username; //The email of the current user
var keepLogin; //Whether or not this user should remain logged in on session termination

////////////////////////////////////////////
///////////////OpenPGP Setup////////////////
////////////////////////////////////////////
var openpgp; //Reference object for all openPGP code

function setup_PGP()
{
	//Loads code for OpenPGP functionality
	requirejs(['openpgp'], function (obj) {
		openpgp = obj;
		chrome.contextMenus.create({id:"encrypt", title:"Encrypt", onclick:sendEncrypt, contexts:["editable"], documentUrlPatterns:["https://mail.google.com/mail/*", "https://mg.mail.yahoo.com/*"]});
	});
}

////////////////////////////////////////////
//////////Page Request functions////////////
////////////////////////////////////////////
function sendEncrypt(obj)
{
	chrome.tabs.executeScript({code:"context_retrieveMessage()"});
}

////////////////////////////////////////////
////////////Message listeners///////////////
////////////////////////////////////////////

//Handle all messages sent from the page here
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	switch(request.type)
	{
		//This message appears when the content script is successfully injected
		case "content_load":
			//Prepare PGP functionality
			setup_PGP();
			//Load default user information?
			
		break;
		
		case "get_message":
			//Handle message retrieval here.  Messages take the following form:
			//{type:"get_message", id:"", recipients:["", ""], subject:"", messageBody:""}
			//id - String: A unique identifier for this message
			//recipients - Array of Strings: All intended recipients
			//subject - String: The subject of the message
			//messageBody - String: The body of the message
			
			var newMessageBody = "!" + request.messageBody + "!";
			var newSubject = "!" + request.subject + "!";
			
			var messageObject = {type:"post_message", id:request.id, recipients:request.recipients, subject:newSubject, messageBody:newMessageBody};
			chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
				chrome.tabs.sendMessage(tabs[0].id, messageObject);
			});
			
		break;
	}
});

//Gets the popup window
function getPopup()
{
	return(chrome.extension.getViews({type:'popup'})[0]);
}

////////////////////////////////////////////
/////////////User Registration//////////////
////////////////////////////////////////////

//The initiating function for each step is shown
//Add any additional functions as needed

//Step 2
function reg_checkEmailAvailable(userEmail)
{
  var serverURL = "192.241.239.122:8888"
  var userEmail = "colebee@mail.fresnostate.edu"

	
}

//Step 3
function reg_generateKeys()
{
	
}

//Step 4
function reg_testKeys()
{
	var uname = document.getElementById('usrame').value;
	
	privKey = localStorage.getItem(uname + '_privKey');
	pubKey = localStorage.getItem(uname + '_pubKey');
	
	reg_testKeys_encrypt();
}

function reg_testKeys_encrypt()
{	
	var options = {
		data: 'Cryptoid Mail - The Best Email Encryption Utility in CSCI 150',
		publicKeys: openpgp.key.readArmored(pubkey).keys
	};
	
	openpgp.encrypt(options).then(function(ciphertext) {
		reg_testKeys_decrypt(ciphertext.data);
	});
}

function reg_testKeys_decrypt(str)
{
	var pword = document.getElementById('password').value;
	
	var privKeyObj = openpgp.key.readArmored(privkey).keys[0];
	privKeyObj.decrypt(pword);
	
	options = {
		message: openpgp.message.readArmored(str),
		privateKey: privKeyObj
	};
	
	openpgp.decrypt(options).then(function(plaintext) {
		if(plaintext == 'Cryptoid Mail - The Best Email Encryption Utility in CSCI 150')
			reg_UploadPublic(); //Success
		else
			reg_generateKeys(); //Fail
	});
}

//Step 5
function reg_UploadPublic()
{
	
}
