Package.describe({
	summary: 'Core package for CryptoJS, standard secure crypto algorithms',
	version: '3.1.2',
	git: 'https://github.com/p-j/meteor-crypto-core.git'
});

Package.onUse(function (api) {
	api.versionsFrom('METEOR@0.9.0');
	api.add_files('lib/core.js', ['client', 'server']);
	if (api.export) {
		api.export('CryptoJS');
	}
});

Package.onTest(function (api) {
	api.use([
		'jparker:crypto-core@3.1.2',
		'tinytest'
	], ['client', 'server']);

	api.addFiles('tests/tests.js', ['client', 'server']);
});
