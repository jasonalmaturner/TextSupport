var app = angular.module('TextSupport');

app.controller('supportCtrl', function($scope, supportService){

	$scope.data = {};
	console.log('test')

	$scope.getData = function(){
		supportService.getTicket().$asObject($scope, 'firebase');
		// console.log($scope.'firebase');
	}

})