var resolve = require('path').resolve;
var execFileSync = require('child_process').execFileSync;

var pkg = require('../package.json');
var config = pkg.config.kibanaPluginHelper;
var pluginDir = resolve(__dirname, '../');
var kibanaDir = resolve(pluginDir, config.home);

var kbnServerArgs = [
  '--kbnServer.testsBundle.pluginId', pkg.name,
  '--kbnServer.plugin-path', pluginDir
];

var cmd = 'npm';
var args = ['run', 'test:dev', '--'].concat(kbnServerArgs);
execFileSync(cmd, args, {
  cwd: kibanaDir,
  stdio: 'inherit'
});
