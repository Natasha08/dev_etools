"use strict"

angular
  .module('myApp')
   .factory('ErrFactory', function() {

   	function Err() {
   		this.fail = 'Failed...';
   		this.forbid = 'Sorry, that access is forbidden';
   		this.disabled = 'That function is disabled';
}
   		return Err;
   });