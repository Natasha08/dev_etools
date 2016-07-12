// Karma configuration
// Generated on Sat Jul 02 2016 11:33:21 GMT-0600 (MDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [ 
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.js',
        'lib/angular-mocks.js',
        'public/spec/build/scripts.js',
        'lib/checklist-model.js',
        'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.3.0/angular-ui-router.js',
        'https://angular-ui.github.io/bootstrap/ui-bootstrap-1.3.3.min.js',
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-cookies.js'

    ],

    // list of files to exclude
    exclude: [
        'node_modules',
        'routes'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
