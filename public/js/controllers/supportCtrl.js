var app = angular.module('TextSupport');

app.controller('supportCtrl', function($scope, supportService){

	
	$scope.getData = function(){
		supportService.getTicket().$asObject().$bindTo($scope, 'firebase').then(function(){
			console.log($scope.firebase);
			// $scope.data = $scope.firebase;
		});
	}


	$scope.getData();

	// console.log($scope.firebase);
})