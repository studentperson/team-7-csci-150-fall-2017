
/*

	This is the name of the encryption module js file
	encryption
	
	Again this is to give names to functions and the module

*/

/*
	designated function names
*/



//functionality: encrypt the message with the public key, sign with privatekey
//returns encrypted message
function encryptm (privkey, pubkey, message):String
{
		
}

//I added 'm' at the end to keep the function unique
	
//functionality: decrypt message with private key
//returns decrypted message
function decryptm (privkey, message):String
{
		
}
	
//functionality: the email is used as an id, and the private key is encrypted with the password
//returns object with public and private key	
function generateKeypair (email, pword):Object
{
		
}

//It takes the privkey and pword and returns the unencrypted pword	
function decryptPrivateKey (privkey, pword):String
{
	
}

//Recommendation: Keep fetching the public key from the server as
	//a seperate function

//Uses the recipient's email to get their public key
//Unsure if this will be implemented here
//As it requires access to the server
function fetchpublickey (recipient):String
{
	
}


//Under the assumption that access to the server will be included
// in this module

//functionality: The server will be accessed and the public key of the recipient will be gotten
	//The decrypted private key and message will  be sent in
	//Uses private key to sign
	//Returns the encrypted message
function encryptMessage (privkey, recipient, message):String
{
		
}
	
//functionality: The server will be accessed and the public key of the user will be gotten
	//The decrypted private key and encrypted message will  be sent in
	//Uses private and public key to decrypt
	//Returns the decrypted message
function decryptMessage (privkey, useremail, message):String
{
		
}