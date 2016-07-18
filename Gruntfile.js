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

//uncomment concat for Testing

// , 'public/spec/controllers/LoginControllerSpec.js', 'public/spec/controllers/EfridgeControllerSpec.js', 'public/spec/factories/efridgeFactorySpec.js', 'public/spec/services/efridgeServiceSpec.js', 'public/spec/services/authServiceSpec.js'

concat: {
    jasminejs: {
    src: ['public/app.js', 'public/modules/login/providers/constants.js', 'public/modules/login/providers/factories.js', 'public/modules/login/LoginController.js', 'public/modules/login/providers/services.js', 'public/modules/efridge/EfridgeController.js', 'public/modules/login/providers/constants.js', 'public/modules/efridge/providers/services.js', 'public/modules/efridge/providers/factories.js', 'public/spec/services/authServiceSpec.js', 'public/spec/controllers/LoginControllerSpec.js'], 
    dest: 'public/spec/build/scripts.js',
  },
    mochajs: {
    src: ['public/app.js', 'lib/checklist-model.js', 'lib/angular-ui-router.js', 'public/modules/efridge/EfridgeController.js', 'public/modules/efridge/providers/services.js', 'public/modules/efridge/providers/factories.js', 'public/modules/login/providers/constants.js', 'test/controllers/repository.js', 'public/modules/login/providers/services.js', 'public/modules/login/LoginController.js'],
    dest: 'test/build/scripts.js',
  },  
},
//uncomment concat for PRODUCTION
 // concat: {
 //    js: {
 //    src: ['public/app.js', 'public/modules/common/javascripts/controller.js', 'public/modules/login/providers/*.js', 'public/modules/login/LoginController.js', 'public/modules/efridge/EfridgeController.js', 'public/modules/efridge/providers/*.js', 'public/modules/egym/EgymController.js', 'public/modules/egym/providers/*.js',], 
 //    dest: 'public/modules/common/javascripts/scripts.js',
 //  },  

  //   less: {
  //   src: ['public/stylesheets/style.less', 'public/stylesheets/footer.less'], 
  //   dest: 'public/stylesheets/concat.less',
  // },
  // },

// watch: {
//   css: {
//     files: ['public/stylesheets/*.css'],
//     tasks: ['concat'],
//   },
  // js: {
  //   files: ['app.js', 'routes/*.js', 'public/*/*.js'],
  //   tasks: ['concat'],
  // },  

// 
 uglify: {
    my_target: {
      files: {
        'public/modules/common/javascripts/output.min.js': ['public/modules/common/javascripts/scripts.js'],
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


