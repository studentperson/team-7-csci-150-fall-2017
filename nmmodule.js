//Defining module
var nmmodule = new Object();

/*
var openpgp;
var gprivkey;
var gpubkey;
var gpword;
var gemessage;
var gdmessage;
var gkeyobj;
var gemail;
var gprivkeyobj;
*/

//var messageBox = document.getElementById("mbody");

nmmodule.setup_PGP1 = function ()
{
	//messageBox.value = "loading openpgp...";
	//Loads code for OpenPGP functionality
	requirejs(['openpgp'], function (obj) {
		openpgp = obj;
		openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)
		//messageBox.value = "openpgp loaded";
	});
}

//setup_PGP1();

//function encryptm (privkey, pubkey, message)
nmmodule.encryptm = function (inp_privkobj, pubkey, message)
{
	return new Promise(function(resolve, reject) {
	
	{
		
		var options;
		
		var privKeyObj;
		
		var encrypted;
		
		privKeyObj = inp_privkobj;
		
		options = {
			data: message,
			publicKeys: openpgp.key.readArmored(pubkey).keys,  // for encryption
			privateKeys: privKeyObj // for signing (optional)
		};
		//messageBox.value = "encrypting...\n";
		openpgp.encrypt(options).then(function(ciphertext) {
			encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
			
		}).then(		
		function()
		{
			
			//messageBox.value = encrypted;
			
			resolve(encrypted);
			
		});
	}
	
	});
	
}

//function decryptm (privkey, pubkey, message)
nmmodule.decryptm = function (inp_privkobj, pubkey, message)
{
	return new Promise(function(resolve, reject) {
	
	{
		
		var options;
		
		var decrypted;

		var privKeyObj;
		
		privKeyObj = inp_privkobj;
		
		options = {
			message: openpgp.message.readArmored(message),     // parse armored message
			publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
			privateKey: privKeyObj // for decryption
		};
		//messageBox.value = "decrypting...\n";
		
		openpgp.decrypt(options).then(function(plaintext) {
			decrypted = plaintext.data; // 'Hello, World!'
		}).then(
		function()
		{
			//messageBox.value = decrypted;			
			
			resolve (decrypted);
		});
	}
	
	});
}

nmmodule.generateKeypair = function (femail, pword)
{
	
	return new Promise(function(resolve, reject) {
	
	{
		ret_keys = new Object();
		var pubkey;
		var privkey;
		var ret_keys;
		
		
		var options = {
			userIds: [{ email:femail }], // multiple user IDs
			numBits: 4096,                                            // RSA key size
			passphrase: pword         // protects the private key
		};
		//messageBox.value = "generating keys...\n";

		openpgp.generateKey(options).then(function(newkey) {
			privkey = newkey.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
			pubkey = newkey.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
		}).then(function()
		{
			ret_keys.privatekey = privkey;
			ret_keys.publickey = pubkey;
			//messageBox.value = pubkey;
			resolve (ret_keys);
			
		});
	}

	});
}

//returns the private key as an object
//called in testkeygen
nmmodule.decryptPrivateKey = function (inp_privkey, inp_pword)
{
	var privKeyObj;
	privKeyObj = openpgp.key.readArmored(inp_privkey).keys[0];
	privKeyObj.decrypt(inp_pword);

	return privKeyObj;
}
