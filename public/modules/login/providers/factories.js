angular
  .module('myApp')
   .factory('UserFactory', function UserFactory() {

   	function User() {
   		this.email = '';
   		this.password = '';
   		this.message = 'user obj created!';
   		this.err = 'Error making user obj';
}
   		return User;
   });

