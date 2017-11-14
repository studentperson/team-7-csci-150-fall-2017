var key00 = 1;

var openpgp;
var privkey;
var pubkey;

var tpword;
var encrypted;

var privk_decrypt00;
var privk_decrypt01;
var test00;

var funcdone = false;

var messageBox = document.getElementById("mbody");

function setup_PGP(callback)
{
	messageBox.value = "loading openpgp...";
	//Loads code for OpenPGP functionality
	requirejs(['openpgp'], function (obj) {
		openpgp = obj;
		openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)

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

		funcdone  = true;
		messageBox.value = "openpgp loaded";
	});
}

var dummytest00 = setup_PGP1();


document.addEventListener("DOMContentLoaded", function() {
  setup_PGP(function () {});
});

function manencrypt() {
	
	if (funcdone)
	{
		funcdone = false;
		
		var messageText = messageBox.value;
		
		var options;

		
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
		

			var options = {
				userIds: [{ name:'NM_test_00'}], // multiple user IDs
				numBits: 4096,                                            // RSA key size
				passphrase: tpword         // protects the private key
			};
			messageBox.value = "generating keys...\n";

			openpgp.generateKey(options).then(function(newkey) {
				privkey = newkey.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
				pubkey = newkey.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
				test00 = newkey;
			}).then(function()
			{
				messageBox.value = pubkey;
				funcdone = true;
				
				var privKeyObj;
		
				privKeyObj = openpgp.key.readArmored(privkey).keys[0];
				privKeyObj.decrypt(tpword);
				
				privk_decrypt00 = privKeyObj;
				privk_decrypt01 = privKeyObj.privateKeyArmored;
			});
		
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