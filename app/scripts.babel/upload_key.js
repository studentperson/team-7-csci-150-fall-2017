// Example inputs
// var keyServer = 'http://192.241.239.122:8888';
// var pubKey = '-----BEGIN PGP PUBLIC KEY BLOCK-----\n' +
// '\n' +
// 'mQENBFn9JDgBCACoyh59TpQsGxMk675i+Hfk/kbKxWiPafB7m1C5Sts4cmRcpQTo\n' +
// 'mXOT2RC9mnPUQgCASEVmnGIhhbY71tkJ+SQisRFRXZN0KRNBLPeTREN5Qyh+jIkV\n' +
// 'vO/tPEpgxM45idkWaXhGhm5qa/RBtdJQhmjhU847OHT8SjyyuaUzokt+pzL5Zm5T\n' +
// 'LvmHyIIC+nOrWTA+J3tuU+j0xT6kdupEaY6l0WZjUqW/o686WFT0TUcynWb4V3iC\n' +
// 'nSxuf1antyoHVqIA41YWW4Nh2W7+Bm4Xcf2rvJVo20gQR8ptT36MHf6ykXGhTsS3\n' +
// 'z5hD3yDWrYVfZK+qV9MaqNOD7H7aCCAIIZ1HABEBAAG0F0NvbGUgQmVlIDxjb2xl\n' +
// 'QGJlZS5jYXQ+iQFUBBMBCAA+FiEEI8JOEeubhBIYgear5C65/ahRTooFAln9JDgC\n' +
// 'GwMFCQPCZwAFCwkIBwIGFQgJCgsCBBYCAwECHgECF4AACgkQ5C65/ahRTopKjQf8\n' +
// 'Cybe/8QI+aKuWr62822Ul1MxJDihb1w2sSZ/r+NafLKoSg6gXmAqvjpLNemsQehC\n' +
// 'oUYoMQLJhQEIRD1vftOLmVBl5bB2T8zROXCaiaTxSzY1kgjmwKFS1ftHeyYE3obI\n' +
// 'V9GVLGnjEInEtTfyPFoIveCgUgy49s/eeLLFV61qxjh6W072RWMfsMYqfNJdZpr+\n' +
// '0sNHtRWXaQZ7b21bjFI0uplhhFjiCUSFeBxa0dPqNLOUj+BE4/H6jF1zwUXE01K6\n' +
// 'qJYoLTrsdnSsJJEIgQ5exf7n1j66OAtqnSxCAZVwsXkg2Is4sTc5sFJYW9HzCgYh\n' +
// '06hBLBOpUsGh2JMtG8SwgbkBDQRZ/SQ4AQgAw3Qikm+S87MTMeNKHLmwVXbMYcM5\n' +
// 'Zv+fJkXBzJY4J7ovIOecpEbt0FPQrjJK4oc5i2FgO+PA7BF3V5Ojadr8vwTVws/V\n' +
// 'r3r2Ac6Vw9EllsMEoS2Y6PzqaiTmHhSS+dnZPUS67h8bc+UK4ZbA9RN4Z4MsF6M1\n' +
// '8gGVWcMsV5cXJ81r6Lun5MSz9WnSdZAqLwSEW+y865PnOO91WckoW2fDLtBVGYnJ\n' +
// 'wSZGHpe+wQ+S5cuKRbRp6yTJGe4t8a+jzMTU8nHmbDc6ZW5/LSW6ATOnKHO0AGUO\n' +
// 'a9UbSvBH0KXZrKTP8Mw1HXRb2LNLw3FZXq/LGw7cB35luqsfQByfv8DgFQARAQAB\n' +
// 'iQE8BBgBCAAmFiEEI8JOEeubhBIYgear5C65/ahRTooFAln9JDgCGwwFCQPCZwAA\n' +
// 'CgkQ5C65/ahRToq09Qf+K8iDYfR2irfe5gaJteQLV4JYP6d9KQxq24DKtEdnTflo\n' +
// '5Kwcmmg9i3kW4fSk6C17PontulF9Qo0JJ+ffxjEHPYceqK0k+nn890wkNJyZKPiJ\n' +
// 'oq7PE8/YWDGvnYI1npiFany8BVsIRDsQedFxUxwXtJGUWwtK9mr7HkZ4pcDTFtL3\n' +
// '19Wlk2jznhEighKAJdB6HM8AFwliYlnxpPZBq7JFEiYwy6BPXFfxVE6pliBpaEvT\n' +
// 'H4nvL3w1euNMAWDwbqOBz6vEp0KVCzK6ikG2HmBvMybvZZa8B2I060AcSM5e1+dj\n' +
// 'k/ell/XrcCJW9P6Bj8KXhVHiK5kg8E37Y+iBMstJmw==\n' +
// '=wPBC\n' +
// '-----END PGP PUBLIC KEY BLOCK-----';

// Input - Armored Public Key, Keyserver
// Output - Boolean callback
function uploadKey(pubKey, keyServer, callback)
{
  var payload = {'publicKeyArmored':pubKey};
  var string_payload = JSON.stringify(payload)
  var xhr = new XMLHttpRequest();
  var request = keyServer.concat('/api/v1/key');
  xhr.open('POST', request, true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    var status = xhr.status;
    var data = xhr.responseText;
    callback(data);
  }
  
  xhr.send(string_payload);
}

uploadKey(pubKey, keyServer, function(response){
  console.log(response);
});
