var C = CryptoJS;

Tinytest.add('MeteorCryptoCore - Base', function (t) {
	var data = {};
	data.overrides = {
		init: function (arg) {
			this.initFired = true;
			this.initArg = arg;
		},

		toString: function () {}
	};

	data.mixins = {
		mixinMethod: function () {}
	};

	data.Obj = C.lib.Base.extend(data.overrides);
	data.Obj.mixIn(data.mixins);
	data.obj = data.Obj.create('argValue');
	data.objClone = data.obj.clone();

	t.equal(data.Obj.extend, C.lib.Base.extend);
	t.equal(data.Obj.hasOwnProperty('extend'), false);
	t.equal(data.Obj.$super, C.lib.Base);
	t.equal(data.Obj.init, data.overrides.init);
	t.equal(data.Obj.hasOwnProperty('init'), true);
	t.equal(data.Obj.toString, data.overrides.toString);
	t.equal(data.Obj.hasOwnProperty('toString'), true);
	t.equal(data.obj.extend, C.lib.Base.extend);
	t.equal(data.obj.hasOwnProperty('extend'), false);
	t.equal(data.obj.$super, data.Obj);
	t.equal(data.obj.initFired, true);
	t.equal(data.obj.initArg, 'argValue');
	t.equal(data.Obj.mixinMethod, data.mixins.mixinMethod);
	t.equal(data.Obj.hasOwnProperty('mixinMethod'), true);
	t.notEqual(data.obj, data.objClone);
	t.equal(data.objClone.initArg, data.obj.initArg);

	data.obj.initArg = 'newValue';
	t.notEqual(data.obj.initArg, data.objClone.initArg);
});

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



Tinytest.add('MeteorCryptoCore - WordArray Init 0', function (t) {
	t.equal(
		C.lib.WordArray.create().toString(),
		''
	);
});

Tinytest.add('MeteorCryptoCore - WordArray Init 1', function (t) {
	t.equal(
		C.lib.WordArray.create([0x12345678]).toString(),
		'12345678'
	);
});

Tinytest.add('MeteorCryptoCore - WordArray Init 2', function (t) {
	t.equal(
		C.lib.WordArray.create([0x12345678], 2).toString(),
		'1234'
	);
});

Tinytest.add('MeteorCryptoCore - WordArray ToString Passed Encoder', function (t) {
	t.equal(
		C.lib.WordArray.create([0x12345678]).toString(C.enc.Latin1),
		'\x12\x34\x56\x78'
	);
});

Tinytest.add('MeteorCryptoCore - WordArray ToString Default Encoder', function (t) {
	t.equal(
		C.lib.WordArray.create([0x12345678]).toString(),
		'12345678'
	);
});

Tinytest.add('MeteorCryptoCore - WordArray Concat 3', function (t) {
	var wordArray1 = C.lib.WordArray.create([0x12345678], 3);
	var wordArray2 = C.lib.WordArray.create([0x12345678], 3);

	t.equal(
		wordArray1.concat(wordArray2).toString(),
		'123456123456'
	);
	t.equal(
		wordArray1.toString(),
		'123456123456'
	);
});

Tinytest.add('MeteorCryptoCore - WordArray Concat 4', function (t) {
	var wordArray1 = C.lib.WordArray.create([0x12345678], 4);
	var wordArray2 = C.lib.WordArray.create([0x12345678], 3);

	t.equal(
		wordArray1.concat(wordArray2).toString(),
		'12345678123456'
	);
	t.equal(
		wordArray1.toString(),
		'12345678123456'
	);
});

Tinytest.add('MeteorCryptoCore - WordArray Concat 5', function (t) {
	var wordArray1 = C.lib.WordArray.create([0x12345678], 5);
	var wordArray2 = C.lib.WordArray.create([0x12345678], 3);

	t.equal(
		wordArray1.concat(wordArray2).toString(),
		'1234567800123456'
	);
	t.equal(
		wordArray1.toString(),
		'1234567800123456'
	);
});

Tinytest.add('MeteorCryptoCore - WordArray Concat Long', function (t) {
	var wordArray1 = C.lib.WordArray.create();

	var wordArray2 = C.lib.WordArray.create();
	var wordArray3 = C.lib.WordArray.create();
	for (var i = 0; i < 500000; i++) {
		wordArray2.words[i] = i;
		wordArray3.words[i] = i;
	}
	wordArray2.sigBytes = wordArray3.sigBytes = 500000;

	t.equal(
    wordArray2.toString() + wordArray3.toString(),
    wordArray1.concat(wordArray2.concat(wordArray3)).toString()
  );
});

Tinytest.add('MeteorCryptoCore - WordArray Clamp', function (t) {
	var wordArray = C.lib.WordArray.create([0x12345678, 0x12345678], 3);
	wordArray.clamp();

	t.equal(
		wordArray.words.toString(), [0x12345600].toString()
	);
});

Tinytest.add('MeteorCryptoCore - WordArray Clone', function (t) {
	var wordArray = C.lib.WordArray.create([0x12345678]);
	var clone = wordArray.clone();
	clone.words[0] = 0;

	t.notEqual(wordArray.toString(), clone.toString());
});

Tinytest.add('MeteorCryptoCore - WordArray Random', function (t) {
	t.notEqual(C.lib.WordArray.random(8).toString(), C.lib.WordArray.random(8).toString());
	t.equal(C.lib.WordArray.random(8).sigBytes, 8);
});
