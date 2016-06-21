
# linuxproject
<code>git clone git@github.com:Natasha08/dev_etools.git</code><br />
<code>cd dev_etools</code><br />
<code>npm install</code><br />
<p>#create a secret.js file</p>
<p>#example</p>
<code>var secretKey = 'very long string';</code><br />
<code>var sessionKey = 'second very long string';</code><br />

<code>module.exports = sessionKey;</code><br />
<code>module.exports = secretKey;</code><br />

<p>#create a db_secret.js file</p>
<p>#example</p>
<code>function db_secret() {</code><br />
	<code>var db = {};</code><br />
	<code>db.user = '';</code><br />
	<code>db.password = '';</code><br />
	<code>db.name = '';</code><br />
<code></code>
<code>return db;</code><br />
<code>}</code><br />
<code></code>
<code>module.exports = db_secret;</code><br />
<p>#start the app</p>
<code>node ./bin/www</code><br />

<p>#navigate to /url:3000/login</p>

<p>#example</p>
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

