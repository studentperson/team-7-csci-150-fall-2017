////////////////////////////////////////////
///////////////OpenPGP Setup////////////////
////////////////////////////////////////////
var openpgp; //Reference object for all openPGP code

function setup_PGP()
{
	//Loads code for OpenPGP functionality
	requirejs(['openpgp'], function (obj) {
		openpgp = obj;
		chrome.contextMenus.create({id:"encrypt", title:"Encrypt", onclick:sendEncrypt, contexts:["editable"], documentUrlPatterns:["https://mail.google.com/mail/*"]});
	});
}

////////////////////////////////////////////
//////////Page Request functions////////////
////////////////////////////////////////////
function sendEncrypt(obj)
{
	chrome.tabs.executeScript({code:"context_retrieveMessage()"});
}

function sendEncryptAll(obj)
{
	chrome.tabs.executeScript({code:"getMessages()"});
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