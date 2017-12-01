var User = new Object();

User.register = function(email, pword)
{
	return Encryption.generateKeypair(email, pword).then(function(key) {
		User.savePrivate(key.privatekey);
		User.savePublic(key.publickey);
		pubkey = key.publickey;
		User.email = email;
		
		privkey = openpgp.key.readArmored(key.privatekey).keys[0];
		privkey.decrypt(pword);
		
		if(privkey.primaryKey.isDecrypted)
		{
			Keyserver.uploadKey(key.publickey, 'http://192.241.239.122:8888', function(data)
			{
				return(true);
			});
		}
	});
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
	
	if(privkey.primaryKey.isDecrypted)
	{
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