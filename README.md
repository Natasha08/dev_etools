# dev_etools

Nutrition and workout app

Node vs. 4.4.7

<h2>Navigation<h2>
<a href ="#clone-repo">Clone Repo</a><br />
<a href ="#secret-js">Express Session and Cookie Keys</a><br />
<a href ="#db-secret">Database access file and schema</a><br />
<a href ="#start-app">Starting the app</a><br />
<a href ="#testing">Testing</a><br />
<a href ="#grunt">Grunt Commands</a><br />

This app uses node version 4.4.7 and express middleware with angularjs.
Using the curl method to install node:
<code> apt-get install curl</code></code>
<code>sudo-E bash -</code>
<code>apt-get install -y nodejs</code>
<p>See https://github.com/nodesource/distributions for more information</p>


#clone repo
<a href"#clone-repo"></a>
<code>git clone git@github.com:Natasha08/dev_etools.git</code><br />
<p>#cd & install dependencies</p>
<code>cd dev_etools && npm install</code><br />
<code>npm install -g nodemon</code><br />

This project uses the mysql database
<code> apt-get install mysql server</code>
<p>The default database name is freetools. The tables are users, efridge & egym (see gist below)</p>

#create a secret.js file
<a href"#secret-js"></a>
This file will handle the secret keys for the express session and cookie generation on the api-server side of the app. Place this file in your root directory.
<h5>#example</h5>
<em>secret.js</em><br />
<code>var secretKey = 'very long string';</code><br />
<code>var sessionKey = 'second very long string';</code><br />
<p>#use <a href ="https://gist.github.com/Natasha08/db413a074ed10a767ea9ddbeabe5b340">this gist</a> to create tables and get started. Set user permissions to db & associated tables for 'your_user_name'@'localhost'.</p>

<code>module.exports = sessionKey;</code><br />
<code>module.exports = secretKey;</code><br />

#create a db_secret.js file
<a href"#db-secret"></a>
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

#start the app
<a href"#start-app"></a>

<code>sudo nodemon</code><br />

<p>#navigate to 'http://localhost:3000/'</p>

#Testing
<a href"#testing"></a>

This project is exploring several testing suites. The most current uses jasmine/karma for unit testing, and protractor for end-to-end testing.
<h4>Jasmine/Karma Testing</h4>
<code>npm install -g karma</code>
<code>npm install -g karma/jasmine</code>
<code>npm install -g karma-chrome-launcher</code>
Then <code>karma start</code> to run tests.

<h4>Protractor Testing</h4>
Follow the instructions in the helper.me file in the root directory to install protractor and setup the selenium server. Then <code>cd test_protractor</code> and <code> protractor conf</code> to run tests.

<h4>Mocha/Chai Testing</h4>
<code>npm install -g mocha </code>
<code>mocha test/controllers</code>
<code>mocha test/factories</code>
<code>mocha test/services</code>

#Grunt commands
<a href"#grunt"></a>

<h5>[production]</h5>
<code>grunt</code>
<p>#runs default tasks 'concat', 'uglify', 'cssmin', including require.js</p>

Be sure to comment/uncomment the appropriate concat command [dev or production]</p>
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
