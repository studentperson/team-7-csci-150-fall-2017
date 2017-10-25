//This is highly outdated, it is mostly for committing
var key00 = 1;
var openpgp = window.openpgp;
var privkey;
var pubkey;
var passphrase;
var encrypted;
var privKeyObj;
var funcdone = true;

function testFunction() {
	
	if (funcdone)
	{
	funcdone = false;
	
	var messageBox = document.getElementById("mbody");
	var messageText = messageBox.value;
	
	var options;
	
	passphrase = 'nmpassword0123';
	
	privKeyObj = openpgp.key.readArmored(privkey).keys[0];
	privKeyObj.decrypt(passphrase);
	
	options = {
		data: messageText, // input as String (or Uint8Array)
		publicKeys: openpgp.key.readArmored(pubkey).keys,  // for encryption
		privateKeys: privKeyObj // for signing (optional)
	};
	messageBox.value = "encrypting...\n";
	openpgp.encrypt(options).then(function(ciphertext) {
		encrypted = ciphertext.data; // '-----BEGIN PGP MESSAGE ... END PGP MESSAGE-----'
	}).then(
	//;
	function()
	{
	messageBox.value = encrypted;
	funcdone = true;
	});
	}
}

function testFunction2() {
	
	if (funcdone)
	{
	funcdone = false;
	var messageBox = document.getElementById("mbody");
	
	var options;
	var decrypted;

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
}

function testKeyGen() 
{
	if (funcdone)
	{
funcdone = false;
var messageBox = document.getElementById("mbody");

openpgp.config.aead_protect = true // activate fast AES-GCM mode (not yet OpenPGP standard)


var options = {
    userIds: [{ name:'NM_test_00'}], // multiple user IDs
    numBits: 4096,                                            // RSA key size
    passphrase: 'nmpassword0123'         // protects the private key
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
	}
}



document.getElementById('encrypt').onclick = testFunction;
document.getElementById('decrypt').onclick = testFunction2;
document.getElementById('genkeys').onclick = testKeyGen;