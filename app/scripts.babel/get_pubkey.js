'use strict';

// Test data
var userEmail = 'colebee@mail.fresnostate.edu';
var keyServer = 'http://192.241.239.122:8888';

// Input: User Email, Keyserver address, callback function
// Output: Callback returns string of armored public key
function getPublicKey(userEmail, keyServer, callback) {
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

getPublicKey(userEmail, keyServer, function (content) {
  console.log(content);
});

