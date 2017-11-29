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

include("js/get_pubkey.js");
include("js/Cache.js");
include("js/Keyserver.js");

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
		var pubkey;
		var privkey;
		var ret_keys;
		ret_keys = new Object();
		
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

nmmodule.encryptMessage = function(inp_message, inp_privkobj, inp_recipient)
{
	
	return new Promise(function(resolve, reject) {
	
	
	//use email to get key, if can't get error
	get_pubkey.testasync().then(function(result) {
		
		//result doesn't do anything don't have access to internet
		if (true)
		{	
			
			//need temp keys to test
			//encryptm = function (inp_privkobj, pubkey, message)
			//encryptm = function (inp_privkobj, result, inp_message)
			nmmodule.encryptm(inp_privkobj, result, inp_message).then(function(result2){
				resolve (result2);
			});
			//nmmodule.encryptm = function (inp_privkobj, pubkey, message)
			
			//resolve (result);
		}
		else
		{
			//return error
			//I suspect resolve,reject won't work like this
		}
		
	});
	
	});
	
}



nmmodule.decryptMessage = function(inp_message, inp_privkobj, inp_email)
{
	return new Promise(function(resolve, reject) {
		
	//split string into 3 parts
	var part0, part1, part2, temp_part;
	var index0, index1;
	var delim0, delim1;
	
	delim0 = '-----BEGIN PGP MESSAGE-----';
	delim1 = '-----END PGP MESSAGE-----';
	
	index0 = inp_message.indexOf(delim0);
	part0 = inp_message.substring(0, index0);
	temp_part = inp_message.substring(index0, inp_message.length);
	index1 = temp_part.indexOf(delim1) + delim1.length;
	part1 = temp_part.substring(0, index1);
	part2 = temp_part.substring(index1, temp_part.length);

	get_pubkey.testasync().then(function(result) {
		//result doesn't do anything don't have access to internet
		if (true)
		{	
			nmmodule.decryptm(inp_privkobj, result, part1).then(function (result2) {
				part0 += "\n" + result2;
				part0 += "\n" + part2;
				resolve (part0);
			});
		}
		else
		{
			//return error
			//I suspect resolve,reject won't work like this
		}
	});
	
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
