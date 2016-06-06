
myApp.factory('Auth', function($http, $q, AuthToken) {
	var authFactory = {};
	authfactory.login = function(username, password) {

		return $http.post('/login', {
			email: email,
			password: password
		})
		.success(function(data) {
			AuthToken.setToken(data.token);
			return data;
		})
	}

	authFactory.logout = function() {
		AuthToken.setToken();
	}

	authFactory.isLoggedIn = function() {
		if(AuthToken.getToken())
			return true;
		else
			return false;
	}

	authFactory.getUser = function() {
		if(AuthToken.getToken())
			return $http.get('/me');
		else
			return $q.reject({ message: "User has no token"});
	}
});

myApp.factory('AuthToken', function($window) {
	var authTokenFactory = {};

	authTokenFactory.getToken = function() {
		return $window.localStorage.getItem('token');
	}
	authTokenFactory.setToken = function(token) {
		if(token)
			$window.localStorage.setItem('token', token);
		else
			$window.localStorage.removeItem('token');
	}

})