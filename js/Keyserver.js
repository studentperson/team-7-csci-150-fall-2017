var Keyserver = new Object();

// Input - Armored Public Key, Keyserver
// Output - Boolean callback
//function uploadKey(pubKey, keyServer, callback) {
Keyserver.uploadKey = function (pubKey, keyServer, callback) {
  var payload = { 'publicKeyArmored': pubKey };
  var string_payload = JSON.stringify(payload);
  var xhr = new XMLHttpRequest();
  var request = keyServer.concat('/api/v1/key');
  xhr.open('POST', request, true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    var status = xhr.status;
    var data = xhr.responseText;
    callback(data);
  };

  xhr.send(string_payload);
}


// Input: User Email, Keyserver address, callback function
// Output: Callback returns string of armored public key
//function getPublicKey(userEmail, keyServer, callback) {
Keyserver.getPublicKey = function (userEmail, keyServer, callback) {
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

// Pass in the user's email, the keyserver address, and a callback function
// that takes in a boolean
//
// for example:
// reg_checkEmailAvailable(userEmail, keyServer, function(responseBool){
//   console.log(responseBool)
// });
Keyserver.checkEmailAvailable = function (userEmail, keyServer, callback) {
  var retrieveAPI = '/api/v1/key?email=';
  var request = keyServer.concat(retrieveAPI, userEmail);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', request, true);
  xhr.onload = function () {
    if (xhr.readyState == 4) {
      if (xhr.responseText == 'Key not found') {
        callback(true);
      } else {
        var content = JSON.parse(xhr.responseText);
        if (content.userIds[0].verified == true) {
          callback(false);
        } else {
          callback(true);
        }
      }
    } else {
      console.error(xhr.readyState);
    }
  };
  xhr.send(null);
}
