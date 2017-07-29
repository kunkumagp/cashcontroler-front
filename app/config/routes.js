define([
	'app'
], function(
	app
){
	app.config([
		'$urlRouterProvider',
		'$stateProvider',
		'$locationProvider',
		function(
			$urlRouterProvider,
			$stateProvider,
			$locationProvider
		){
			$urlRouterProvider.otherwise('/');

			$urlRouterProvider.rule(function ($injector, $location) {
				var path = $location.url();
				if (path[path.length - 1] === '/' || path.indexOf('/?') > -1) {
					return;
				}
				if (path.indexOf('?') > -1) {
					return path.replace('?', '/?');
				}
				return path + '/';
			});
		}
	]);
});