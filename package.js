const { Mod } = require("./src/mod.js");
const { Callbacks } = require('./src/callbacks.js');

module.exports.mod = new Mod();
module.exports.callbacks = new Callbacks();