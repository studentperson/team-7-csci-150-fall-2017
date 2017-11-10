// Example inputs
var keyServer = 'http://192.241.239.122:8888';
var message = '-----BEGIN PGP MESSAGE-----\n' +
'Version: OpenPGP.js v2.5.11\n' +
'Comment: https://openpgpjs.org\n' +
'\n' +
'wcBMA/a2Gg9Vi8Q1AQf8CvUG2aQbabiXrgPAzi4HCYRCBZUoO0Z9ApqrPTdJ\n' +
'K/iX1HkfvOF1QTcPj+03vx88hEPJfc4IgZBzkEz3gDsuj8SzYNR5+VUKmTOI\n' +
'kDLiteoWSZYl49DAdVe1SfnPFWKoh42C4XwllhPVchKqA4p4pNkq/6Nb8thC\n' +
'qea+HfkkriICHqQkNEH4S8VhMu+4DAOSp0dOu1iweLd1dK56xR3VZVGSTf1G\n' +
'Yd5AZO/bEYogbAL0oe2ykvu7ZjboaowTEURFViuEhJNIrtQ7WHNErTJWVxoT\n' +
'jJZ5bgXj5NsVIufIF3ZX2RzYalMbm3wCgt8Glc2fHkd6NDLRHmLvbk6jFy38\n' +
'dtLCnQHpU6c6K1uuvDoAwAl0WEa8lgYiq4KmJqOhMtddetTlxKJDsx4bVXcp\n' +
'thdO1bvtEBqSKxA+1gr0UgqyJdXQ9wYWv6DSEubnm3bkso6FrzQSIEVTeRkQ\n' +
'qdggI75PKB0DMgpstLwFrEkZZaYQoKioeWUlpwK4RjjjKtDVeOg1qJCOsXHy\n' +
'6QGHrih2al1z5fPN4RnVL6h23EhTwnE30XYsiiVodfQEsrOBLp0u0+/1kyBq\n' +
'05XplUnvWvECELhUz8K01dzAVmgeo6EUCF0yYIfgyfd2I1QUDvJ7uw+JfBkc\n' +
'+HqsW2drFWLdVaY/aJ1qyRg669HRLmgQ7b+utlv8Fmawc7SmQ6Dm/arLgv08\n' +
'CH/kQTZVVcNaoujwekeg4EkoKtVq+51j5mbjSvDBTzw+8mICflzgK8CoU3wW\n' +
'kkhD9vN1LJCJ3ZI2xozBOA4oLB1Dyg5ob1LloEmvsicj0NGkGQ6qO1PwQgmN\n' +
'SdUUwe4+ChEcH43vr4q07aLfFQ4TV7fbmNsttCBp9dNU+jgQlEGtx9EPvFkJ\n' +
'eRyfjSYu5M3a6FZ/XUGk+ArBRRqSGaKx4LkW/YH9+nX81YsvCKWXnalkqnOD\n' +
'o/cacon1Z38z+/S/8tJ8gx2W82hLrdnmxU0rDSi5qX9jd2bxdk/xMiUDtm2u\n' +
'NJHCtuwexhKYd6gFdiAjayKZrwzvP+nuoN1RX7GkgdWBd0jbtOOG4ZJJgv9P\n' +
'jn+y6eGS5t/F8UMpaAqF1T66gQ4mh/aXb5VfFkMoCmqeIsOCxp6HD2FQHdli\n' +
'HDB9YAKKhSMh7Y7vBgT9e3t/BrV8E8XezhMX/YzpYbWQdmxklS8GGqzLDo8M\n' +
'IGVq53Oak/CbyCIvHKaAMKU2QEcsauPurnydjm+FIkh7CdqD59XDtKXrL6fH\n' +
'wLwTcRc9AHMaJGpT9nuPLHqkftOs5rM1MnkfKrmg8YX1tqQXE6HOxGP7L4Wh\n' +
'6XS3Zhaanz4p3ShEriTh6+UghI0hlofUdIV8XdNGTbMb+/aejc5cRbzfSj1e\n' +
'GGNL0UWXwixW9rwG5FD5UKPx8KvJoWiERsmEYraPGAOM1XkwCKkLL/85jHaw\n' +
'ZCq+CyIhSMT731TMALMCt4GToOmW9OFsUxP0r0piWq1kvyvaEfY7ViJOrJNF\n' +
'UN6Kw9+fPIOnVQ==\n' +
'=bJ97\n' +
'-----END PGP MESSAGE-----';
var privKey = '-----BEGIN PGP PRIVATE KEY BLOCK-----\n' +
'\n' +
'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\n' +
'=6aen\n' +
'-----END PGP PRIVATE KEY BLOCK-----';

// Input - Armored Public Key, Keyserver
// Output - Boolean callback
function verifyKey(privKey, message, keyServer, callback)
{
}

verifyKey(pubKey, message, keyServer, function(response){
  console.log(response);
});
