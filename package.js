Package.describe({
	summary: 'Base package for CryptoJS, standard secure crypto algorithms',
	version: '3.1.2-1',
	git: 'https://github.com/p-j/meteor-crypto-base'
});

Package.on_use(function (api) {
	api.versionsFrom('METEOR@0.9.0');
	api.add_files('crypto.js', ['client', 'server']);
	if (api.export) {
		api.export('CryptoJS');
	}
});