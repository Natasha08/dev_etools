
# linuxproject
<p>A nodejs express app for tracking calories and strength gains. Future description to come.</p>

<h4>Grunt commands</h4>
<h5>[production]</h5>
<p>grunt</p>
<p>#runs default tasks 'concat', 'uglify', 'cssmin', including require.js</p>

<p>#Be sure to comment/uncomment the appropriate concat command [dev or production]</p>
<p>#concast less files to concat.less</p>

<h5>dev</h5>
<p>grunt dev</p>
<p>#runs the above commands, with +1 = 'watch'</p>

<h4>Package.json</h4>
<p># converts concat.less >> build/styles.css</p>
<p>npm run lesscon</p> 

<p># this will browserify the concat client-side js('grunt' default will concat js files)</p>
<p>npm run build</p>

<h4>flightplan.js</h4>

<p>fly production</p>
<p>fly dev</p>

<p>#modified flightplan to move app to var/www (for use with nginx)</p>
<p>remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username}, 'var', 'www', 'etools.natashaosborne.com');</p>

<p>#modified code for flightplan to work with forever</p>
<p>remote.exec('forever stop ~/'+appName+'/'+startFile, {failsafe: true});</p>
<p>remote.exec('forever start ~/'+appName+'/'+startFile);</p>

# dev_etools
Future dev server, will become staging server.

