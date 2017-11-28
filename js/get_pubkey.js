'use strict';

var get_pubkey = new Object();

// Test data

var userEmail = 'colebee@mail.fresnostate.edu';
var keyServer = 'http://192.241.239.122:8888';

// Input: User Email, Keyserver address, callback function
// Output: Callback returns string of armored public key
//function getPublicKey(userEmail, keyServer, callback) {
get_pubkey.getPublicKey = function (userEmail, keyServer, callback) {
  var retrieveAPI = '/api/v1/key?email=';
  var request = keyServer.concat(retrieveAPI, userEmail);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', request, true);
  xhr.onload = function () {
    if (xhr.readyState == 4) {
      if (xhr.responseText == 'Key not found') {
        callback(xhr.responseText);
      } else {
        var content = JSON.parse(xhr.responseText);
        if (content.userIds[0].verified == true) {
          callback(content.publicKeyArmored);
        } else {
          callback(content.publicKeyArmored);
        }
      }
    } else {
      console.error(xhr.readyState);
    }
  };
  xhr.send(null);
}

/*
getPublicKey(userEmail, keyServer, function (content) {
  console.log(content);
});
*/

get_pubkey.testasync = function () 
{
	
		return new Promise(function(resolve, reject) {
			
				var nmstuff00 = new Object();
	nmstuff00.publickey = [
'-----BEGIN PGP PUBLIC KEY BLOCK-----',
'Version: OpenPGP.js v2.5.10',
'Comment: https://openpgpjs.org',
'',
'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',
'=kyR/',
'-----END PGP PUBLIC KEY BLOCK-----',
'',
'',
].join('\n');
	nmstuff00.pword = 'password';
			
			resolve(nmstuff00.publickey);
		});
}