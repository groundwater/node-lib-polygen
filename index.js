function PolyGenerator() {
  this._generators = {};
  this._default    = null;
}

PolyGenerator.prototype.addSymbol = function addSymbol(key, gen) {
  this._generators[key] = gen;
};

PolyGenerator.prototype.setDefault = function setDefault(gen) {
  this._default = gen;
};

PolyGenerator.prototype.generate = function generate(token) {
  var gen  = this._generators[token] || this._default;

  return gen(token);
}

exports.PolyGenerator = PolyGenerator;
