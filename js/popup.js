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

function setup_PGP(callback)
{
	messageBox.value = "loading openpgp...";
	//Loads code for OpenPGP functionality
	requirejs(['openpgp'], function (obj) {
		openpgp = obj;
		openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)
		//chrome.contextMenus.create({id:"encrypt", title:"Encrypt", onclick:sendEncrypt, contexts:["editable"], documentUrlPatterns:["https://mail.google.com/mail/*"]});
		callback();
		funcdone  = true;
		messageBox.value = "openpgp loaded";
	});
}

function setup_PGP1()
{
	messageBox.value = "loading openpgp...";
	//Loads code for OpenPGP functionality
	requirejs(['openpgp'], function (obj) {
		openpgp = obj;
		openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)
		//chrome.contextMenus.create({id:"encrypt", title:"Encrypt", onclick:sendEncrypt, contexts:["editable"], documentUrlPatterns:["https://mail.google.com/mail/*"]});
		funcdone  = true;
		messageBox.value = "openpgp loaded";
	});
}

//var dummytest00 = 
setup_PGP1();

/*
window.onload = function() {
	messageBox.value = "testload";
  setup_PGP(function () {});
};

document.addEventListener("DOMContentLoaded", function() {
  you_function(...);
});
*/

document.addEventListener("DOMContentLoaded", function() {
  setup_PGP(function () {});
});

function manencrypt() 
{
	
	var tmessage;
	var tmss00;
	
	tmessage = "Hello world.";

	//problem; this is not returning the value to the gemessage
	//this is probably because it is asynchronous
	//tmss00 = encryptm (gprivkeyobj, gkeyobj.publickey, tmessage);
	
	//gemessage = tmss00;
	
	encryptm (gprivkeyobj, gkeyobj.publickey, tmessage)
	.then(function(result) {
		gemessage = result;
	});

	//messageBox.value = gemessage;
}

//function encryptm (privkey, pubkey, message)
function encryptm (inp_privkobj, pubkey, message)
{
	return new Promise(function(resolve, reject) {
	
	if (funcdone)
	{
		funcdone = false;
		
		//var messageText = messageBox.value;
		
		var options;
		
		//tpword = 'nmpassword0123';
		
		var privKeyObj;
		
		var encrypted;
		
		privKeyObj = inp_privkobj;
		
		/*
		privKeyObj = openpgp.key.readArmored(privkey).keys[0];
		privKeyObj.decrypt(tpword);
		*/
		
		options = {
			//data: 'Hello, World!',                             // input as String (or Uint8Array)
			data: message,
			publicKeys: openpgp.key.readArmored(pubkey).keys,  // for encryption
			privateKeys: privKeyObj // for signing (optional)
		};
		messageBox.value = "encrypting...\n";
		openpgp.encrypt(options).then(function(ciphertext) {
			encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
			
			/*
			messageBox.value = encrypted;
			funcdone = true;
			
			return encrypted;
			*/
			
		}).then(		
		function()
		{
			
			messageBox.value = encrypted;
			funcdone = true;
			
			//gemessage = encrypted;
			
			//return encrypted;
			
			resolve(encrypted);
			
		});
	}
	else
		messageBox.value = "function not complete\n";
	
	});
	//return encrypted;
	
}

function mandecrypt() 
{
	var tmessage;
	
	tmessage = gemessage;
	
	//gdmessage = decryptm (gprivkeyobj, gkeyobj.publickey, tmessage);
	decryptm (gprivkeyobj, gkeyobj.publickey, tmessage)
	.then(function(result) {
		gdmessage = result;
	});
	
	//messageBox.value = gdmessage;
}

//function decryptm (privkey, pubkey, message)
function decryptm (inp_privkobj, pubkey, message)
{
	return new Promise(function(resolve, reject) {
	
	if (funcdone)
	{
		funcdone = false;
		
		var options;
		
		var decrypted;

		var privKeyObj;
		
		privKeyObj = inp_privkobj;
		
		/*
		privKeyObj = openpgp.key.readArmored(privkey).keys[0];
		privKeyObj.decrypt(tpword);
		*/
		
		
		
		options = {
			message: openpgp.message.readArmored(message),     // parse armored message
			publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
			privateKey: privKeyObj // for decryption
		};
		messageBox.value = "decrypting...\n";
		
		openpgp.decrypt(options).then(function(plaintext) {
			decrypted = plaintext.data; // 'Hello, World!'
		}).then(
		function()
		{
			messageBox.value = decrypted;			
			funcdone = true;
			
			//return decrypted;
			resolve (decrypted);
		});
	}
	else
		messageBox.value = "function not complete\n";
	
	//return decrypted;
	});
}

function testKeyGen() 
{
	var tpword00;
	var temail00;
	var tkeyobj;
	tpword00 = "password";
	temail00 = "someone@example.com";
	
	tkeyobj = generateKeypair (temail00, tpword00);
	gkeyobj = tkeyobj;
	gpword = tpword00;
	
	//gprivkeyobj = decryptPrivateKey (gkeyobj.privatekey, gpword);
	
	
}

function generateKeypair (femail, pword)
{
	ret_keys = new Object();
	if (funcdone)
	{
		var pubkey;
		var privkey;
		var ret_keys;
		funcdone = false;
		
		//tpword = messageBox.value;

		messageBox.value = "setting up pgp...\n";


			var options = {
				//userIds: [{ name:'NM_test_00'}], // multiple user IDs
				//userIds: [{ name:'Jon Smith', email:'jon@example.com' }], // multiple user IDs
				userIds: [{ email:femail }], // multiple user IDs
				numBits: 4096,                                            // RSA key size
				passphrase: pword         // protects the private key
			};
			messageBox.value = "generating keys...\n";

			openpgp.generateKey(options).then(function(newkey) {
				privkey = newkey.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
				pubkey = newkey.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
			}).then(function()
			{
				ret_keys.privatekey = privkey;
				ret_keys.publickey = pubkey;
				messageBox.value = pubkey;
				funcdone = true;
			});
	}
	else
		messageBox.value = "function not complete\n";


	return ret_keys;
}

//returns the private key as an object
function decryptPrivateKey (inp_privkey, inp_pword)
{
		var privKeyObj;
		privKeyObj = openpgp.key.readArmored(inp_privkey).keys[0];
		privKeyObj.decrypt(inp_pword);
		//need to convert the decrypted object into a string
		
		return privKeyObj;
}

//currently defunct
function maniprkey()
{	

messageBox.value = "not in use";
/*
	if (funcdone)
	{
		funcdone = false;
		
		
		privkey = messageBox.value;
	
		//should be callback
		funcdone = true;
	}
	else
		messageBox.value = "function not complete\n";
*/
}

function manipbkey()
{
	messageBox.value = "not in use";
	/*
	if (funcdone)
	{
		funcdone = false;
	
		pubkey = messageBox.value;
	
		//should be callback
		funcdone = true;
	}
	else
		messageBox.value = "function not complete\n";
	*/
}

//get the private key object
function manipw()
{
	if (funcdone)
	{
		funcdone = false;
	
		gprivkeyobj = decryptPrivateKey (gkeyobj.privatekey, gpword);
	
		//tpword = messageBox.value;
	
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