var resolve = require('path').resolve;
var execFileSync = require('child_process').execFileSync;

var config = require('../package.json').config.kibanaPluginHelper;
var pluginDir = resolve(__dirname, '../');
var kibanaDir = resolve(pluginDir, config.home);

var cmd = 'bin/kibana';
var args = ['--dev', '--plugin-path', pluginDir];
execFileSync(cmd, args, {
  cwd: kibanaDir,
  stdio: 'inherit'
});
