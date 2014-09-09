var C = CryptoJS;

Tinytest.add('MeteorCryptoCore - Hex Stringify', function (t) {
	t.equal(
		C.enc.Hex.stringify(C.lib.WordArray.create([0x12345678])),
		'12345678'
	);
});

Tinytest.add('MeteorCryptoCore - Hex Parse', function (t) {
	t.equal(
		C.enc.Hex.parse('12345678').toString(),
		C.lib.WordArray.create([0x12345678]).toString()
	);
});

Tinytest.add('MeteorCryptoCore - Latin1 Stringify', function (t) {
	t.equal(
		C.enc.Latin1.stringify(C.lib.WordArray.create([0x12345678])),
		'\x12\x34\x56\x78'
	);
});

Tinytest.add('MeteorCryptoCore - Latin1 Parse', function (t) {
	t.equal(
    C.enc.Latin1.parse('\x12\x34\x56\x78').toString(),
    C.lib.WordArray.create([0x12345678]).toString()
  );
});

Tinytest.add('MeteorCryptoCore - Utf8 Stringify 1', function (t) {
  t.equal(
    C.enc.Utf8.stringify(C.lib.WordArray.create([0x24000000], 1)),
    '$'
  );
});

Tinytest.add('MeteorCryptoCore - Utf8 Stringify 2', function (t) {
	t.equal(
    C.enc.Utf8.stringify(C.lib.WordArray.create([0xc2a20000], 2)),
    '¢'
  );
});

Tinytest.add('MeteorCryptoCore - Utf8 Stringify 3', function (t) {
	t.equal(
    C.enc.Utf8.stringify(C.lib.WordArray.create([0xe282ac00], 3)),
    '€'
  );
});

Tinytest.add('MeteorCryptoCore - Utf8 Stringify 4', function (t) {
	t.equal(
    C.enc.Utf8.stringify(C.lib.WordArray.create([0xf0a4ada2], 4)),
    '𤭢'
  );
});

Tinytest.add('MeteorCryptoCore - Utf8 Parse 1', function (t) {
	t.equal(
    C.enc.Utf8.parse('$').toString(),
    C.lib.WordArray.create([0x24000000], 1).toString()
  );
});

Tinytest.add('MeteorCryptoCore - Utf8 Parse 2', function (t) {
	t.equal(
    C.enc.Utf8.parse('¢').toString(),
    C.lib.WordArray.create([0xc2a20000], 2).toString()
  );
});

Tinytest.add('MeteorCryptoCore - Utf8 Parse 3', function (t) {
	t.equal(
    C.enc.Utf8.parse('€').toString(),
    C.lib.WordArray.create([0xe282ac00], 3).toString()
  );
});

Tinytest.add('MeteorCryptoCore - Utf8 Parse 4', function (t) {
	t.equal(
    C.enc.Utf8.parse('𤭢').toString(),
    C.lib.WordArray.create([0xf0a4ada2], 4).toString()
  );
});
