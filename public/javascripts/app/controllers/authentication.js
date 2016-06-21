smbshareControllers.controller('AuthenticationController', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.credentials = {
		username: 'aaron',
		password: 'test123'
	}

	$scope.signin = function() {
		alert("Not Implemented");
	}
}]);
