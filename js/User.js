var User = new Object();

User.register = function(email, pword)
{
	return new Promise(function(resolve, reject)
	{
		Encryption.generateTestPair(email, pword).then(function()
		{
			resolve(true);
		});
	});
	
	/*return Encryption.generateKeypair(email, pword).then(function(key) {
		//Save private key
		User.savePrivate(key.privkey);
		
		//Save public key
		User.savePublic(key.pubkey);
		
		//Upload public key to keyserver
		return Keyserver.uploadPublicKey(email, key.pubkey).then(function() {
			//Upload success, Login user
			return User.login(email, pword);
		}, function() {
			//Upload failed
			return "Key upload failed";
		}
		);
	});*/
}

User.login = function(email, pword)
{
	//Pulls keys from localStorage
	pubkey = localStorage.getItem(email + "_pubkey");
	var privkey_enc = localStorage.getItem(email + "_privkey");
	
	if(!privkey_enc)
		return(1);
	
	//Decrypts private key with password	
	privkey = openpgp.key.readArmored(privkey_enc).keys[0];
	privkey.decrypt(pword);
	
	if(privkey.primaryKey.isDecrypted)	 {
		User.email = email;
		populateContexts();
		return 0;
	} else {
		return 2;
	}
}

User.logout = function()
{
	pubkey = null;
	privkey = null;
	User.email = null;
	depopulateContexts();
}

User.savePublic = function(key) 
{
	//Saves the public key for this user
	localStorage.setItem(User.email + "_pubkey", key);
}

User.savePrivate = function(key, pword)
{	
	//Saves the encrypted password to localStorage
	localStorage.setItem(User.email + "_privkey", key);
}