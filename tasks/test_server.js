var resolve = require('path').resolve;
var execFileSync = require('child_process').execFileSync;

var config = require('../package.json').config.kibanaPluginHelper;
var pluginDir = resolve(__dirname, '..');
var kibanaDir = resolve(pluginDir, config.home);
var mochaSetupJs = resolve(kibanaDir, 'test/mocha_setup.js');

var cmd = 'mocha';
var args = ['--require', mochaSetupJs, 'server/**/__tests__/**/*.js'];
execFileSync(cmd, args, {
  cwd: pluginDir,
  stdio: 'inherit'
});
