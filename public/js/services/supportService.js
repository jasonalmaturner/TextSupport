var app = angular.module('TextSupport');

app.service('supportService', function($firebase){
	var firebaseUrl = 'https://text-support-9001.firebaseio.com/';

	this.getTicket = function(){
		return $firebase(new Firebase(firebaseUrl + 'number/'));
	}

})

// this.firebaseSync = $firebase(this.firebaseRef);
// this.firebaseObj = this.firebaseSync.$asObject();

// $bindTo($scope, 'firebase')