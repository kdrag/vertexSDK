// Karma configuration
// Generated on Tue Nov 03 2015 08:44:37 GMT-0800 (PST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      '../www/lib/ionic/js/angular/angular.js',
      '../www/lib/ionic/js/angular/angular-animate.js',
      '../www/lib/ionic/js/angular/angular-resource.js',
      '../www/lib/ionic/js/angular/angular-sanitize.js',
      '../www/lib/ionic/js/angular/angular-mocks.js',
      '../www/lib/ionic/js/angular-ui/angular-ui-router.js',
      '../www/lib/ionic/js/ionic.js',
      '../www/lib/ionic/js/ionic-angular.js',
      '../www/js/*.js',
      '*.js'
    ],

    plugins: [
       'karma-chrome-launcher',
       'karma-jasmine',
       'karma-phantomjs-launcher'
    ],

    // list of files to exclude
    exclude: [
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
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}