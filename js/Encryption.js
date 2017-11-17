var Encryption = new Object();

Encryption.generateKeypair = function(email, pword)
{
	return new Promise(function(resolve, reject)
	{
		//Invoke OpenPGP
		var options = {
			userIds: [{email:email}],
			numBits: 4096,
			passphrase: pword
		};
		
		openpgp.generateKey(options).then(function(key) {
			resolve({privkey:key.privateKeyArmored, pubkey:key.publicKeyArmored});
		});
	});
}
/*
Encryption.encryptMessage = function(message, privkey, recipient)
{
	return new Promise(function(resolve, reject)
	{
		//Retrieve recipient's public key
		Keyserver.getPublicKey(recipient, 'http://192.241.239.122:888').then(function(recip_pubkey)
		{
			//Sign message
			options = {
				data: message,
				privateKeys: privkey
			};
			
			openpgp.sign(options).then(function(signed) {
				
				//Encrypt message
				options = {
					data: signed.data,
					publicKeys: recip_pubkey
				};
				
				openpgp.encrypt(options).then(function(ciphertext) {
					resolve(ciphertext.data);
				});
			});
			
		});

	});
}

Encryption.decryptMessage = function(message, privkey, sender)
{
	return new Promise(function(resolve, reject)
	{
		//Retrieve sender's public key
		Keyserver.getPublicKey(sender, , 'http://192.241.239.122:888').then(function(sender_pubkey)
		{
			//Decrypt message
			options = {
				message: message,
				privateKey: privkey
			};
			
			openpgp.decrypt(options).then(function(plaintext)
			{
				//Verify signature
				options = {
					message: plaintext.data,
					publicKeys: sender_pubkey
				};
				
				openpgp.verify(options).then(function(verified) {
					validity = verified.signatures[0].valid;
					if(validity) {
						resolve(plaintext);
					} else {
						reject('Signature could not be verified.  This message may not be legitimate.');
					}
				});
			});
			
		});
	});
}

Encryption.decryptPrivateKey = function(privkey, pword)
{
	var privKeyObj = openpgp.key.readArmored(privkey).keys[0];
	privKeyObj.decrypt(pword);
	
	return(privKeyObj);
}*/

Encryption.generateTestPair = function(email, pword)
{
	return new Promise(function(resolve, reject)
	{
		Encryption.generateKeypair(email,pword).then(function(keys)
		{
			User.email = email;
			User.savePublic(keys.pubkey);
			User.savePrivate(keys.privkey);
			
			resolve();
		});
	});
}