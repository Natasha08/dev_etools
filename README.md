# dev_etools
Nutrition and workout app

<p>#clone repo</p>
<code>git clone git@github.com:Natasha08/dev_etools.git</code><br />
<p>#cd & install dependencies</p>
<code>cd dev_etools && npm install</code><br />
<code>npm install -g nodemon</code><br />
<p>This project uses the mysql database</p>
<code> apt-get install mysql server</code>
<p>The default database name is freetools. The tables are users, efridge & egym (see gist below)</p>
<p>#create a secret.js file</p>
<h5>#example</h5>
<em>secret.js</em><br />
<code>var secretKey = 'very long string';</code><br />
<code>var sessionKey = 'second very long string';</code><br />
<p>#use <a href ="https://gist.github.com/Natasha08/db413a074ed10a767ea9ddbeabe5b340">this gist</a> to create tables to get started. Set user permissions to db & associated tables for 'your_user_name'@'localhost'.</p>

<code>module.exports = sessionKey;</code><br />
<code>module.exports = secretKey;</code><br />

<p>#create a db_secret.js file</p>
<h5>#example</h5>
<em>db_secret.js</em><br />
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
<code>sudo nodemon</code><br />

<p>#navigate to /url:3000</p>

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
