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
    src: ['public/app.js', 'public/common/javascripts/controller.js', 'public/login/LoginController.js', 'public/login/providers/*.js', 'public/efridge/EfridgeController.js', 'public/efridge/providers/*.js', 'public/egym/EgymController.js', 'public/egym/providers/*.js',], 
    dest: 'public/common/javascripts/scripts.js',
  },
    less: {
    src: ['public/stylesheets/style.less', 'public/stylesheets/footer.less'], 
    dest: 'public/stylesheets/concat.less',
  },
  },
   
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
        'public/common/javascripts/output.min.js': ['public/common/javascripts/scripts.js'],
      },
    },
  },
  cssmin: {
  target: {
    files: {
      'public/stylesheets/output.min.css': ['public/stylesheets/styles.css'],
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
grunt.registerTask('cat', 'concat');
grunt.registerTask('production', ['concat', 'cssmin']);
grunt.registerTask('default', ['concat', 'cssmin']);
//dev build
grunt.registerTask('dev', ['concat', 'uglify','cssmin', 'watch']);
};

//working on including this as a third command. Looking for alternative to comment/uncomment solution above
//git grunt default
// grunt.registerTask('git', ['concat', 'uglify', 'cssmin']);
// };


