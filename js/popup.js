var key00 = 1;

//var openpgp = window.openpgp;
var openpgp;
var privkey;
var pubkey;

var tpword;
var encrypted;
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

function manencrypt() {
	
	if (funcdone)
	{
		funcdone = false;
		
		var messageText = messageBox.value;
		
		var options;
		
		//tpword = 'nmpassword0123';
		
		var privKeyObj;
		
		privKeyObj = openpgp.key.readArmored(privkey).keys[0];
		privKeyObj.decrypt(tpword);
		
		options = {
			//data: 'Hello, World!',                             // input as String (or Uint8Array)
			data: messageText,
			publicKeys: openpgp.key.readArmored(pubkey).keys,  // for encryption
			privateKeys: privKeyObj // for signing (optional)
		};
		messageBox.value = "encrypting...\n";
		openpgp.encrypt(options).then(function(ciphertext) {
			encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
		}).then(		
		function()
		{
			messageBox.value = encrypted;
			funcdone = true;
		});
	}
	else
		messageBox.value = "function not complete\n";
}

function mandecrypt() {
	
	if (funcdone)
	{
		funcdone = false;
		
		var options;
		
		var decrypted;

		var privKeyObj;
		
		privKeyObj = openpgp.key.readArmored(privkey).keys[0];
		privKeyObj.decrypt(tpword);
		
		options = {
			message: openpgp.message.readArmored(encrypted),     // parse armored message
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
		});
	}
	else
		messageBox.value = "function not complete\n";
}

function testKeyGen() 
{
	if (funcdone)
	{
		funcdone = false;
		
		tpword = messageBox.value;

		messageBox.value = "setting up pgp...\n";

		/*
		//setup_PGP();
		//let testpromise00 = setup_PGP().then(); //function (){});
		let promise = setup_PGP();
		promise.then();
		*/
	
		/*
		let myFirstPromise = new Promise((resolve, reject) => {
  // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
  // In this example, we use setTimeout(...) to simulate async code. 
  // In reality, you will probably be using something like XHR or an HTML5 API.
  setTimeout(function(){
    resolve("Success!"); // Yay! Everything went well!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
  console.log("Yay! " + successMessage);
});
*/

		/*
		let promtest00 = new Promise((resolve, reject) => {
		setup_PGP();});*/
		
		/*
		var promtest00 = new Promise(function(resolve, reject){
		setup_PGP();
		if (true){
			resolve("Y");
		}
		else {
			reject(Error ("N"));
		}
		});*/
		
		//setup_PGP(function (){
		//promtest00.then(function (){
			
			//messageBox.value = "done setting up pgp...\n";
			
			//openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)


			var options = {
				userIds: [{ name:'NM_test_00'}], // multiple user IDs
				numBits: 4096,                                            // RSA key size
				passphrase: tpword         // protects the private key
			};
			messageBox.value = "generating keys...\n";

			openpgp.generateKey(options).then(function(newkey) {
				privkey = newkey.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
				pubkey = newkey.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
			}).then(function()
			{
				messageBox.value = pubkey;
				funcdone = true;
			});
		//});
		//messageBox.value = "testing...\n";
	}
	else
		messageBox.value = "function not complete\n";


}

function maniprkey()
{	
	if (funcdone)
	{
		funcdone = false;
	
		privkey = messageBox.value;
		
		/*
		function (function () {})
		{
			
		}
		*/
	
		//should be callback
		funcdone = true;
	}
	else
		messageBox.value = "function not complete\n";
}

function manipbkey()
{
	if (funcdone)
	{
		funcdone = false;
	
		pubkey = messageBox.value;
	
		//should be callback
		funcdone = true;
	}
	else
		messageBox.value = "function not complete\n";
}

function manipw()
{
	if (funcdone)
	{
		funcdone = false;
	
		tpword = messageBox.value;
	
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