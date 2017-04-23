var ursa = require('ursa');
var key = ursa.generatePrivateKey(1024, 65537);
var privkeypem = "MIICXQIBAAKBgQDZSCnqlU26QVvPINDZ5Om4nSG0lLIbzgpEh4IEo9CFIN8E29LrqdW+D3p6mAjy2QO882ogMqjsrPhH3XSg/C46QcSg1wXfv0p6qN1uIOvtVU1ItZ0l9TFwhC/mjhWoPWSEiSa3Ccw8g80iTExOzXVTjZp9mQmilgQsNiTzlPmGgQIDAQABAoGAd2C9nuQPA4E7Vu65sK2jd8nlJdj4jmxCmeo1liUGwM4RmhLIrK/v/m90pHx5liuDcUHvkecjhn12H83dcUF8h4N+9FLVV9ar+I8C/E5IOYQ0qV8VPaR9B+cPAlKj7+w0pPBkNcXin1lTKNJh8bash6mJOvYZp6irr979oApjtU0CQQD+7ePyThCunvQbxwTPoNEy9KbtR2nAb5v07PupYTP0PbhGyFzOD8fsKhm3/gPPNAozTZhP0hS4G5qcwMNvyCO7AkEA2jHLHxr/vs2Hn/Pw8NpvtLom6f6/5eCFLcmjGD+jLGN/7c++jtw7+IgfRQxZenl3GKSOGNhbSwMMc1KFKc8U8wJBAOqQ3aMAbZ0fKSG9+BFLufIW5tmBUi79AxVUUSPDCtj7SWnnxmzcXGpTOqLvmXW4PoKCLVmUxfe5foQpYiqijy0CQGL4mRkX5w+GLNG6Ff06J9dDZOlY23SLHf3B64/RNdOpolqdk+M7NJysKfro+iFavVHZOnc8lFR3Iougz7RCMU8CQQDHSHDA9x8oruO4XBS/BkfzUIKdBAA07ULkZimSqSjP+4FJVk0lublowONWPiifG3F024yXfvkoMnckar0gjEUL";

var pubkeypem = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDZSCnqlU26QVvPINDZ5Om4nSG0lLIbzgpEh4IEo9CFIN8E29LrqdW+D3p6mAjy2QO882ogMqjsrPhH3XSg/C46QcSg1wXfv0p6qN1uIOvtVU1ItZ0l9TFwhC/mjhWoPWSEiSa3Ccw8g80iTExOzXVTjZp9mQmilgQsNiTzlPmGgQIDAQAB";


console.log(privkeypem.toString('ascii'));
console.log(pubkeypem.toString('ascii'));


var privkey = ursa.createPrivateKey(privkeypem);
var pubkey = ursa.createPublicKey(pubkeypem);

msg = "IT’S A SECRET TO EVERYBODY.";

console.log('Encrypt with Alice Public;');
enc = pubkeyAlice.encrypt(msg, 'utf8', 'base64');
console.log('encrypted', enc, '\n');
//console.log('signed', sig, '\n');

console.log('Decrypt with Alice Private;');
rcv = privkeyAlice.decrypt(enc, 'base64', 'utf8');
if (msg !== rcv) {
  throw new Error("invalid decrypt");
}
console.log(rcv);




