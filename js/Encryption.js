//Defining module
var Encryption = new Object();
var gkeyserver = 'http://192.241.239.122:8888';

var includeList00 = new Array();

////////////////////////////////////////////
//////////////Include Utility///////////////
////////////////////////////////////////////

//files to include; must be called from root directory
include("js/Cache.js");
include("js/Keyserver.js");

//adds file as a script
function include(file)
{
	for(var i = 0; i < includeList00.length; i++)
	{
		if(includeList00[i] == file)
			return; //File is already included, escape
	}
	includeList00.push(file);
	
	var tag = document.createElement("script");
	tag.src = file;
	document.head.appendChild(tag);
}

////////////////////////////////////////////
//////////////Include Utility///////////////
////////////////////////////////////////////

//This opens script file from directory of the calling script
//Then converts it to an object
Encryption.setup_PGP1 = function ()
{
	//Loads code for OpenPGP functionality
	requirejs(['openpgp'], function (obj) {
		openpgp = obj;
		openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)
	});
}

//This is a subfunction that directly receive the private key object, public key, and the message
//It then uses these elements to encrypt the message
Encryption.encryptm = function (inp_privkobj, pubkey, message)
{
	//Treating function as asynchronous in case needed later
	return new Promise(function(resolve, reject) {
		var options;
		var privKeyObj;
		var encrypted;
		
		privKeyObj = inp_privkobj;
		
		//Data to pass to encrypt function
		options = {
			data: message,
			publicKeys: openpgp.key.readArmored(pubkey).keys,  // for encryption
			privateKeys: privKeyObj // for signing (optional)
		};
		
		//Actual encryption
		openpgp.encrypt(options).then(function(ciphertext) {
			encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
			//Text passed back
			resolve(encrypted);	
		});
}

//This is a subfunction that directly receive the private key object, public key, and the message
//It then uses these elements to decrypt the message
Encryption.decryptm = function (inp_privkobj, pubkey, message)
{
	//Treating function as asynchronous in case needed later
	return new Promise(function(resolve, reject) {
		var options;
		var decrypted;
		var privKeyObj;
		
		privKeyObj = inp_privkobj;
		
		//options for decryption
		options = {
			message: openpgp.message.readArmored(message),     // parse armored message
			publicKeys: openpgp.key.readArmored(pubkey).keys,    // for verification (optional)
			privateKey: privKeyObj // for decryption
		};
		
		//take the options and decrypt message
		openpgp.decrypt(options).then(function(plaintext) {
			decrypted = plaintext.data;
			//string passed back
			resolve (decrypted);
		});
	});
}

//This takes an email and a password and generates a key pair
//The key pair is an object with element privatekey, publickey
Encryption.generateKeypair = function (inp_email, pword)
{
	//The function is asynchronous, handling async as a promise
	return new Promise(function(resolve, reject) {

		var pubkey;
		var privkey;
		var ret_keys;
		ret_keys = new Object();
		
		//options for generating a key pair
		var options = {
			userIds: [{ email:inp_email }], 
			numBits: 4096,                                            // RSA key size
			passphrase: pword         // protects the private key
		};

		//take the options and generate key
		openpgp.generateKey(options).then(function(newkey) {
			privkey = newkey.privateKeyArmored; // '-----BEGIN PGP PRIVATE KEY BLOCK ... '
			pubkey = newkey.publicKeyArmored;   // '-----BEGIN PGP PUBLIC KEY BLOCK ... '
		}).then(function()
		{
			ret_keys.privatekey = privkey;
			ret_keys.publickey = pubkey;
			//object passed back
			resolve (ret_keys);
		});

	});
}

//This takes a message, the private key object, and an email
//It searches the cache using the email for a public key
//Then it searches the server if it cannot find it in the cache
//It then calls encryptm to pass the message, object, and public key for encryption
//It then returns the encrypted message
//It does write to the cache
Encryption.encryptMessage = function(inp_message, inp_privkobj, inp_email)
{
	//The function is asynchronous, handling async as a promise
	return new Promise(function(resolve, reject) {
	
		var temp_pub_key;
		//search cache
		temp_pub_key = Cache.find(inp_email);

		//if not public key not found in cache
		if (temp_pub_key.length < 1)
		{
			//search for key on key server
			Keyserver.getPublicKey (inp_email, gkeyserver, function (result) {
				if (result == 'Key not found') //if the key was not found then there is a problem
				{
					//just going to be handling encryption errors with empty strings
					reject('');
				}
				else
				{
					//if the key is found write the information to the cache
					Cache.write(inp_email, result);
					
					//encrypt message and return string result
					Encryption.encryptm(inp_privkobj, result, inp_message).then(function(result2){
						resolve (result2);
					});
					
				}
				
			});
		}
		else //if public key is found
		{
			//encrypt message and return string result
			Encryption.encryptm(inp_privkobj, temp_pub_key, inp_message).then(function(result2){
					resolve (result2);
			});
		}
	});
}


//This takes a message, the private key object, and an email
//It searches the cache using the email for a public key
//Then it searches the server if it cannot find it in the cache
//It then calls encryptm to pass the message, object, and public key for decryption
//It then returns the encrypted message
//It does write to the cache
Encryption.decryptMessage = function(inp_message, inp_privkobj, inp_email)
{
	//The function is asynchronous, handling async as a promise
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
		
		//part0 is text before encrypted message
		//part2 is text after encrypted message
		//part1 is the encrypted message
		
		var temp_pub_key;
		//search cache
		temp_pub_key = Cache.find(inp_email);
		
		//if the key is not found in the cache
		if (temp_pub_key.length < 1)
		{
			//search the key server
			Keyserver.getPublicKey (inp_email, gkeyserver, function (result) {
				if (result == 'Key not found')
				{
					//just going to be handling encryption errors as empty strings
					reject('');
				}
				else
				{
					//if the key is found write the information to the cache
					Cache.write(inp_email, result);
					
					//if it is in the server then decrypt the message
					Encryption.decryptm(inp_privkobj, result, part1).then(function (result2) {
						
						//reassemble the parts and return the full message
						part0 += "\n" + result2;
						part0 += "\n" + part2;
						resolve (part0);
	
					});
				}
				
			});
		}
		else //if the key is in the cache
		{
			Encryption.decryptm(inp_privkobj, temp_pub_key, part1).then(function (result2) {
					
					//reassemble the parts and return the full message
					part0 += "\n" + result2;
					part0 += "\n" + part2;
					resolve (part0);
				
			});
		}
	
	});
}


//this takes the private key and password
//and passes back a decrypted key object
Encryption.decryptPrivateKey = function (inp_privkey, inp_pword)
{
	var privKeyObj;
	privKeyObj = openpgp.key.readArmored(inp_privkey).keys[0];
	privKeyObj.decrypt(inp_pword);

	return privKeyObj;
}
