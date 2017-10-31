////////////////////////////////////////////
//////////////Initialization////////////////
////////////////////////////////////////////

//Tells background.js that the script was injected successfully
onload = function()
{
	chrome.runtime.sendMessage({type:"content_load"});
}

//The last object the user right-clicked
var cm_clicked;
document.oncontextmenu = function(e)
{
	cm_clicked = e.target;
}

////////////////////////////////////////////
/////////////Message requests///////////////
////////////////////////////////////////////

//Send information for the requested message
function context_retrieveMessage()
{
	var parentI5 = getParentOfClass(cm_clicked, "I5");
	var messageID = parentI5.getAttribute("id");
	var my_messageBody = getChildOfClass(parentI5, "Am Al editable LW-avf").textContent;
	var my_subject = getChildOfClass(parentI5, "aoD az6").children[0].value;
	var my_recipients = getRecipientsFor(messageID);
	
	var messageObject = {type:"get_message", id:messageID, recipients:my_recipients, subject:my_subject, messageBody:my_messageBody};
	chrome.runtime.sendMessage(messageObject);
}

//Takes the message ID, returns an array of strings
//containing all recipients for that message
function getRecipientsFor(id)
{
	var parentI5 = document.getElementById(id);
	var allRecipients = document.getElementsByClassName("vR");
	
	var result = new Array();
	
	for(var i = 0; i < allRecipients.length; i++)
	{
		if(parentI5.contains(allRecipients.item(i)))
			result.push(allRecipients.item(i).children[0].getAttribute("email"));
	}
	
	return(result);
}

////////////////////////////////////////////
////////////Message Listeners///////////////
////////////////////////////////////////////

//Handle post message commands
//Post message commands will take the following form:
//{type: post_message", messageBody:"*", recipients:["*@*.*", "*@*.*"], ID:""}
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.type == "post_message")
	{
		var parentI5 = document.getElementById(request.id);
		getChildOfClass(parentI5, "Am Al editable LW-avf").textContent = request.messageBody;
		getChildOfClass(parentI5, "aoD az6").children[0].value = request.subject;
		
		//Do not edit recipients for now
		
	}
});