(function(){

angular
  .module('myApp')
  .constant('UserName', "default");


angular
  .module('myApp')
  .constant('ErrStatus', "Failed...");

angular
  .module('myApp')
  .constant('logData', {
  	email: '',
  	password: ''
  });

   angular
  .module('myApp')
   .value('userData', {
      email: '',
      password: '',
      username: '',
      message: 'user obj created!',
      err: 'Error making user obj'
});
 
//   angular
//   .module('myApp')
//   .constant('fail', 'Failed...');

// angular
//   .module('myApp')
//   .constant('forbid', 'Sorry, that access is forbidden');

// angular
//   .module('myApp')
//   .constant('disabled', 'That function is disabled');


  })();	