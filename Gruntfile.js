module.exports = function(grunt) {

// Project configuration. 
grunt.initConfig({

//puts all files listed except '!' in one file, designated @dest:
// uncomment concat for DEVELOPMENT / versioning (git)

  // concat: {
  //   js: {
  //     src: ['app.js', 'routes/*.js','public/login/bundle.js', 'public/javascripts/bundle2.js', 'public/javascripts/bundle3.js'],
  //     dest: 'build/scripts.js',
  //   },
  // },



//puts all files listed except '!' in one file, designated @dest:

//uncomment concat for PRODUCTION
concat: {
    js: {
    src: ['public/javascripts/*.js', 'public/app.js', 'public/templates/*.js', 'app.js', 'routes/index.js'], 
    dest: 'build/scripts.js',
  },
    less: {
    src: ['public/stylesheets/style.less', 'public/stylesheets/footer.less'], 
    dest: 'public/stylesheets/concat.less',
  },
  },
//   css: {
//     src: ['public/stylesheets/*.css'],
//     dest: 'build/styles.css',
//   },    
// watch: {
//   css: {
//     files: ['public/stylesheets/*.css'],
//     tasks: ['concat'],
//   },
  // js: {
  //   files: ['app.js', 'routes/*.js', 'public/*/*.js'],
  //   tasks: ['concat'],
  // },  


 uglify: {
    my_target: {
      files: {
        'public/javascripts/output.min.js': ['build/scripts.js'],
      },
    },
  },
  cssmin: {
  target: {
    files: {
      'public/stylesheets/output.min.css': ['build/styles.css'],
    }
  }
}

});

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
// grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
// grunt.loadNpmTasks('grunt-stripcomments');

//select and uncomment correct concat concat above per task
//production grunt default 
grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
grunt.registerTask('production', ['concat', 'uglify', 'cssmin']);

//dev build
grunt.registerTask('dev', ['concat', 'uglify','cssmin', 'watch']);
};

//working on including this as a third command. Looking for alternative to comment/uncomment solution above
//git grunt default
// grunt.registerTask('git', ['concat', 'uglify', 'cssmin']);
// };


