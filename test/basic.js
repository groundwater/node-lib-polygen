var fs = require('fs');

var PolyGenerator = require('../index.js').PolyGenerator;
var pg = new PolyGenerator();

pg.addSymbol(':stdout', function () {
  return process.stdout;
});

pg.addSymbol(':stderr', function () {
  return process.stderr;
})

pg.setDefault(function (file) {
  return fs.createWriteStream(file);
});

pg.generate(':stdout').write('hello\n');
pg.generate(':stderr').write('goodbye\n');
