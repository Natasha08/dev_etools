var plan = require('flightplan');

var appName = 'etools';
var username = 'deploy';
var startFile = 'bin/www';


var tmpDir = appName+'-' + new Date().getTime();

// configuration
plan.target('dev', [
  {
    host: '159.203.235.132',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);

plan.target('production', [
  {
    host: '45.55.18.92',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  },
// //add in another server if you have more than one
// // {
// //   host: '104.131.93.216',
// //   username: username,
// //   agent: process.env.SSH_AUTH_SOCK
// // }
]);

// run commands on localhost
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
   local.log('build bundle.js');
   local.exec('npm run build1');
   local.log('Build bundle2.js');
   local.exec('npm run build2');
   local.log('Build bundle3.js');
   local.exec('npm run build3');
   local.log('Converting less files');
   local.exec('npm run lesscon');
   local.log('Run grunt production build');
   local.exec('grunt production');

  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.log('Move folder to root');
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.sudo('npm --production --prefix ~/' + tmpDir + ' install ~/' + tmpDir, {user: username});

  remote.log('Reload application');
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: username});
  remote.exec('forever stop ~/' + appName+ '/' +startFile,  {failsafe: true});
  remote.exec('forever start ~/' +appName+ '/' +startFile);
});