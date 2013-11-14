Package.describe({
  summary: "Base package for CryptoJS, standard secure crypto algorithms"
});

Package.on_use(function (api) {
  api.add_files('crypto.js', ['client', 'server']);
  if(api.export)
    api.export('CryptoJS');
});
