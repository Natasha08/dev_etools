
# linuxproject
<p>A nodejs express app for tracking calories and strength gains. Future description to come.</p>

<h4>Grunt commands</h4>
<h5>[production]</h5>
<code>grunt</code>
<p>#runs default tasks 'concat', 'uglify', 'cssmin', including require.js</p>

<p>#Be sure to comment/uncomment the appropriate concat command [dev or production]</p>
<p>#concast less files to concat.less</p>

<h5>dev</h5>
<code>grunt dev</code>
<p>#runs the above commands, with +1 = 'watch'</p>

<h4>Package.json</h4>
<p># converts concat.less >> build/styles.css</p>
<code>npm run lesscon</code> 

<p># this will browserify the concat client-side js('grunt' default will concat js files)</p>
<code>npm run build</code>

<h4>flightplan.js</h4>

<code>fly production</code>
<code>fly dev</code>

<p>#modified flightplan to move app to var/www (for use with nginx)</p>
<code>remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username}, 'var', 'www', 'etools.natashaosborne.com');</code>

<p>#modified code for flightplan to work with forever</p>
<code>remote.exec('forever stop ~/'+appName+'/'+startFile, {failsafe: true});</code>
<code>remote.exec('forever start ~/'+appName+'/'+startFile);</code>

# dev_etools
Future dev server, will become staging server.

