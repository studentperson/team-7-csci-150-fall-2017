var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

userEmail = 'colebee@mail.fresnostate.edu';
//userEmail = 'nonexist@nte.mail';
keyServer = 'http://192.241.239.122:8888';

var response;

// Pass in the user's email, the keyserver address, and a callback function
// that takes in a boolean
//
// for example:
// reg_checkEmailAvailable(userEmail, keyServer, function(responseBool){
//   console.log(responseBool)
// });
function reg_checkEmailAvailable(userEmail, keyServer, callback)
{
  var retrieveAPI = '/api/v1/key?email=';
  var request = keyServer.concat(retrieveAPI, userEmail);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", request, true);
  xhr.onload = function () {
    if (xhr.readyState == 4) {
      if (xhr.responseText == "Key not found") {
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
  }
  xhr.send(null);
}

reg_checkEmailAvailable(userEmail, keyServer, function(responseBool){
  console.log(responseBool)
});

