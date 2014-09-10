Base package for [CryptoJS](https://code.google.com/p/crypto-js/), JavaScript implementations of standard
and secure cryptographic algorithms.

More at https://code.google.com/p/crypto-js/

Files
-----
* `lib/core.js`, with the `CryptoJS` variable scoped globally


Usage
-----

Out of the box, this package provide Utf8, Hex and Latin1 convertion to WordArray and vice versa :
```javascript
    var words  = CryptoJS.enc.Latin1.parse('Hello, World!');
    // { words: [ 1214606444, 1865162839, 1869769828, 553648128 ], sigBytes: 13 }
    var latin1 = CryptoJS.enc.Latin1.stringify(words);
    // Hello, World!
    var words = CryptoJS.enc.Hex.parse('48656c6c6f2c20576f726c6421');
    // { words: [ 1214606444, 1865162839, 1869769828, 553648128 ], sigBytes: 13 }
    var hex   = CryptoJS.enc.Hex.stringify(words);
    // 48656c6c6f2c20576f726c6421
    var words = CryptoJS.enc.Utf8.parse('𤭢');
    // { words: [ -257643102 ], sigBytes: 4 }
    var utf8  = CryptoJS.enc.Utf8.stringify(words);
    // 𤭢
```

On its own, this package won't be very helpful. Add a specific crypto package like :

- [`jparker:crypto-md5`](https://github.com/p-j/meteor-crypto-md5)
- [`jparker:crypto-sha1`](https://github.com/p-j/meteor-crypto-sha1)
- [`jparker:crypto-sha256`](https://github.com/p-j/meteor-crypto-sha256)
- [`jparker:crypto-base64`](https://github.com/p-j/meteor-crypto-base64)
- [`jparker:crypto-aes`](https://github.com/p-j/meteor-crypto-aes)

Other related package : 

- [`jparker:crypto-hmac`](https://github.com/p-j/meteor-crypto-hmac)
