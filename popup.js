//var openpgp = window.openpgp;
var openpgp;
var gprivkey;
var gpubkey;
var gpword;
var gemessage;
var gdmessage;
var gkeyobj;
var gemail;
var gprivkeyobj;

//var privKeyObj;
var funcdone = false;

var messageBox = document.getElementById("mbody");

var includeList = new Array();

include("js/nmmodule.js");

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
	
	//alert(file);
}


function setup_PGP0()
{
	messageBox.value = "loading openpgp...";
	//Loads code for OpenPGP functionality
	requirejs(['openpgp'], function (obj) {
		openpgp = obj;
		openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)
		funcdone  = true;
		messageBox.value = "openpgp loaded";
	});
}

setup_PGP0();

function manencrypt() 
{
	var tmessage;
	var tmss00;
	
	tmessage = "Hello world.";
	
	nmmodule.encryptm (gprivkeyobj, gkeyobj.publickey, tmessage)
	.then(function(result) {
		gemessage = result;
	});
}


function mandecrypt() 
{
	var tmessage;
	
	tmessage = gemessage;
	
	nmmodule.decryptm (gprivkeyobj, gkeyobj.publickey, tmessage)
	.then(function(result) {
		gdmessage = result;
	});
}

function testKeyGen() 
{
	var tpword00;
	var temail00;
	var tkeyobj;
	tpword00 = "password";
	temail00 = "someone@example.com";
	
	gpword = tpword00;
	
	messageBox.value = "generating keys...";
	
	nmmodule.generateKeypair (temail00, tpword00)
	.then(function(result) {
	
		messageBox.value = "keys generated";
		gkeyobj = result;
		
		messageBox.value = "decrypting key...";
		gprivkeyobj = nmmodule.decryptPrivateKey (gkeyobj.privatekey, gpword);
		messageBox.value = "key decrypted";
		messageBox.value = "testing encryption...";
		manencrypt();
			
			//man decrypt is not being called in this function not worrying about it due to time contraints
			//it does work when manually called
			//mandecrypt();
		
	});
	
}

//currently defunct
function maniprkey()
{	

messageBox.value = "not in use";

}

function manipbkey()
{
	messageBox.value = "not in use";
}

//get the private key object
function manipw()
{
	if (funcdone)
	{
		funcdone = false;
	
		gprivkeyobj = decryptPrivateKey (gkeyobj.privatekey, gpword);
	
		//should be callback
		funcdone = true;
	}
	else
		messageBox.value = "function not complete\n";
}

document.getElementById('encrypt').onclick = manencrypt;
document.getElementById('decrypt').onclick = mandecrypt;
document.getElementById('genkeys').onclick = testKeyGen;
document.getElementById('inpprivkey').onclick = maniprkey;
document.getElementById('inppubkey').onclick = manipbkey;
document.getElementById('inppword').onclick = manipw;