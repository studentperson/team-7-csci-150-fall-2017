// var userEmail = 'colebee@mail.fresnostate.edu';

// Pass in the user's email, the keyserver address, and a callback function
// that takes in a boolean
//
// for example:
// reg_checkEmailAvailable(userEmail, keyServer, function(responseBool){
//   console.log(responseBool)
// });
// function reg_checkEmailAvailable(userEmail, keyServer, callback)
// {
//   var retrieveAPI = '/api/v1/key?email=';
//   var request = keyServer.concat(retrieveAPI, userEmail);
//   var xhr = new XMLHttpRequest();
//   xhr.open('GET', request, true);
//   xhr.onload = function () {
//     if (xhr.readyState == 4) {
//       if (xhr.responseText == 'Key not found') {
//         callback(true);
//       } else {
//         var content = JSON.parse(xhr.responseText);
//         if (content.userIds[0].verified == true) {
//           callback(false);
//         } else {
//           callback(true);
//         }
//       } 
//     } else {
//       console.error(xhr.readyState);
//     }
//   }
//   xhr.send(null);
// }

// reg_checkEmailAvailable(userEmail, keyServer, function(responseBool){
//   console.log(responseBool)
// });

var keyServer = 'http://192.241.239.122:8888';
var pubKey = '-----BEGIN PGP PUBLIC KEY BLOCK-----mQENBFn9JDgBCACoyh59TpQsGxMk675i+Hfk/kbKxWiPafB7m1C5Sts4cmRcpQTomXOT2RC9mnPUQgCASEVmnGIhhbY71tkJ+SQisRFRXZN0KRNBLPeTREN5Qyh+jIkVvO/tPEpgxM45idkWaXhGhm5qa/RBtdJQhmjhU847OHT8SjyyuaUzokt+pzL5Zm5TLvmHyIIC+nOrWTA+J3tuU+j0xT6kdupEaY6l0WZjUqW/o686WFT0TUcynWb4V3iCnSxuf1antyoHVqIA41YWW4Nh2W7+Bm4Xcf2rvJVo20gQR8ptT36MHf6ykXGhTsS3z5hD3yDWrYVfZK+qV9MaqNOD7H7aCCAIIZ1HABEBAAG0F0NvbGUgQmVlIDxjb2xlQGJlZS5jYXQ+iQFUBBMBCAA+FiEEI8JOEeubhBIYgear5C65/ahRTooFAln9JDgCGwMFCQPCZwAFCwkIBwIGFQgJCgsCBBYCAwECHgECF4AACgkQ5C65/ahRTopKjQf8Cybe/8QI+aKuWr62822Ul1MxJDihb1w2sSZ/r+NafLKoSg6gXmAqvjpLNemsQehCoUYoMQLJhQEIRD1vftOLmVBl5bB2T8zROXCaiaTxSzY1kgjmwKFS1ftHeyYE3obIV9GVLGnjEInEtTfyPFoIveCgUgy49s/eeLLFV61qxjh6W072RWMfsMYqfNJdZpr+0sNHtRWXaQZ7b21bjFI0uplhhFjiCUSFeBxa0dPqNLOUj+BE4/H6jF1zwUXE01K6qJYoLTrsdnSsJJEIgQ5exf7n1j66OAtqnSxCAZVwsXkg2Is4sTc5sFJYW9HzCgYh06hBLBOpUsGh2JMtG8SwgbkBDQRZ/SQ4AQgAw3Qikm+S87MTMeNKHLmwVXbMYcM5Zv+fJkXBzJY4J7ovIOecpEbt0FPQrjJK4oc5i2FgO+PA7BF3V5Ojadr8vwTVws/Vr3r2Ac6Vw9EllsMEoS2Y6PzqaiTmHhSS+dnZPUS67h8bc+UK4ZbA9RN4Z4MsF6M18gGVWcMsV5cXJ81r6Lun5MSz9WnSdZAqLwSEW+y865PnOO91WckoW2fDLtBVGYnJwSZGHpe+wQ+S5cuKRbRp6yTJGe4t8a+jzMTU8nHmbDc6ZW5/LSW6ATOnKHO0AGUOa9UbSvBH0KXZrKTP8Mw1HXRb2LNLw3FZXq/LGw7cB35luqsfQByfv8DgFQARAQABiQE8BBgBCAAmFiEEI8JOEeubhBIYgear5C65/ahRTooFAln9JDgCGwwFCQPCZwAACgkQ5C65/ahRToq09Qf+K8iDYfR2irfe5gaJteQLV4JYP6d9KQxq24DKtEdnTflo5Kwcmmg9i3kW4fSk6C17PontulF9Qo0JJ+ffxjEHPYceqK0k+nn890wkNJyZKPiJoq7PE8/YWDGvnYI1npiFany8BVsIRDsQedFxUxwXtJGUWwtK9mr7HkZ4pcDTFtL319Wlk2jznhEighKAJdB6HM8AFwliYlnxpPZBq7JFEiYwy6BPXFfxVE6pliBpaEvTH4nvL3w1euNMAWDwbqOBz6vEp0KVCzK6ikG2HmBvMybvZZa8B2I060AcSM5e1+djk/ell/XrcCJW9P6Bj8KXhVHiK5kg8E37Y+iBMstJmw===wPBC-----END PGP PUBLIC KEY BLOCK-----'


// Input - Armored Public Key, Keyserver
// Output - Boolean callback
function uploadKey(pubKey, keyServer, callback)
{
  var payload = {'publicKeyArmored':pubKey};
  console.log(payload.publicKeyArmored);
  var xhr = new XMLHttpRequest();
  var request = keyServer.concat('/pks/add');
  xhr.open('POST', request, true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    var status = xhr.status;
    var data = xhr.responseText;
    callback(data);
  }
  
  xhr.send(payload);
}

uploadKey(pubKey, keyServer, function(response){
  console.log(response);
});
