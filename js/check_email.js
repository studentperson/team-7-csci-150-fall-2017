var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

userEmail = 'colebee@mail.fresnostate.edu';
keyServer = 'http://192.241.239.122:8888';

var response;

function reg_checkEmailAvailable(userEmail, keyServer, callback)
{
  var re;
  var retrieveAPI = '/api/v1/key?email=';
  var request = keyServer.concat(retrieveAPI, userEmail);
  var xhr = new XMLHttpRequest();
  xhr.open("GET", request, true);
  xhr.onload = function () {
    var content = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.table(content);
      callback(!content.userIds[0].verified);
    } else {
      console.table(content);
    }
  }
  xhr.send(null);
}

reg_checkEmailAvailable(userEmail, keyServer, function(responseBool){
  console.log(responseBool)
});

