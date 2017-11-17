////////////////////////////////////////////
//////////////File includes/////////////////
////////////////////////////////////////////

var includeList = new Array();

include("js/utils.js");
include("js/Cache.js");
include("js/User.js");
include("js/Keyserver.js");
include("js/Encryption.js");
include("js/Session.js");

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
	});
}

////////////////////////////////////////////
//////////////Include Utility///////////////
////////////////////////////////////////////

function include(file)
{
	for(var i = 0; i < includeList.length; i++)
	{
		if(includeList[i] == file)
			return; //File is already included, escape
	}
	includeList.push(file);
	
	var tag = document.createElement("script");
	tag.src = file;
	document.head.appendChild(tag);
	
	alert(file);
}

////////////////////////////////////////////
//////////Page Request functions////////////
////////////////////////////////////////////
function sendEncrypt(obj)
{
	chrome.tabs.executeScript({code:"context_retrieveMessage()"});
}

function sendDecrypt(obj)
{
	if(!privkey)
	{
		alert("You are not logged in!");
	}
	
	chrome.tabs.executeScript({code:"context_retrieveMessage2()"});
}

function login()
{
	User.login("mail.cryptoid@gmail.com", "password1");
	
	message = "Cryptoid Mail: The best email encryption in CSCI 150";
	
	var options = {
		data: message,
		publicKeys: openpgp.key.readArmored(pubkey).keys
	};
	
	openpgp.encrypt(options).then(function(ciphertext) {
		//privKeyObj = openpgp.key.readArmored(privkey).keys[0];
		//privKeyObj.decrypt("password1");
		
		message = openpgp.message.readArmored(ciphertext.data);
		
		var options = {
			message: message,
			privateKey: privkey
		};
		
		openpgp.decrypt(options).then(function(plaintext) {
			alert(plaintext.data);
		});
	});
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
			//messageBody - String: The body of the message'
			var newMessageBody = "Subject: " + request.subject + "<br><br>Body: " + request.messageBody;
			var recip_pubkey = Cache.find(request.recipients[0]);
			
			options = {
				data: newMessageBody,
				publicKeys: openpgp.key.readArmored(recip_pubkey).keys
			};
			
			openpgp.encrypt(options).then(function(ciphertext)
			{
				var newSubject = "Encrypted with Cryptoid Mail";
				
				var messageObject = {type:"post_message", id:request.id, recipients:request.recipients, subject:newSubject, messageBody:ciphertext.data};
				chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, messageObject);
				});
			});
			
		break;
		
		case "get_message2":
			var message = request.messageBody;
			
			//privKeyObj = openpgp.key.readArmored(privkey).keys[0];
			//privKeyObj.decrypt("password1");
			
			message = openpgp.message.readArmored(message);
			
			var options = {
				message: message,
				privateKey: privkey
			};
			
			openpgp.decrypt(options).then(function(plaintext) {
				
				var messageObject = {type:"post_message2", id:null, messageBody:plaintext.data};
				chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
					chrome.tabs.sendMessage(tabs[0].id, messageObject);
				});
			});
		break;
	}
});

/////////////////////////////////////
////////////Context Menus////////////
/////////////////////////////////////
var contexts_populated = false;

function populateContexts()
{
	if(contexts_populated)
		return;
	
	contexts_populated = true;
	chrome.contextMenus.create({id:"encrypt", title:"Encrypt", onclick:sendEncrypt, contexts:["editable"], documentUrlPatterns:["https://mail.google.com/mail/*", "https://mg.mail.yahoo.com/*"]});
	chrome.contextMenus.create({id:"decrypt", title:"Decrypt", onclick:sendDecrypt, documentUrlPatterns:["https://mail.google.com/mail/*"]});
}

function depopulateContexts()
{
	if(!contexts_populated)
		return;
	
	contexts_populated = false;
	chrome.contextMenus.remove("encrypt");
	chrome.contextMenus.remove("decrypt");
}

setup_PGP();