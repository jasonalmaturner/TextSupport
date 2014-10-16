var app = angular.module('TextSupport', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/', {
			templateUrl: '/templates/home.html',
			controller: 'mainCtrl'
		})
		.when('/support', {
			templateUrl: '/templates/support.html',
			controller: 'supportCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})

}])