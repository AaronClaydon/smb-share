var smbshareApp = angular.module('smbshareApp', [
	'ngRoute',
	'smbshareControllers'
]);

smbshareApp.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
	$locationProvider.hashPrefix('!');

	$routeProvider.
	when('/auth', {
		templateUrl: '/templates/auth.html',
		controller: 'AuthenticationController'
	}).
	when('/browse/:path*?', {
		templateUrl: '/templates/browse.html',
		controller: 'BrowseController'
	}).
	otherwise('/auth');
}]);

var smbshareControllers = angular.module('smbshareControllers', []);
