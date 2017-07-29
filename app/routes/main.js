define([
	'app'
], function(
	app
){
	app.config([
		'$stateProvider',
		function(
			$stateProvider
		){
			$stateProvider
			.state('hi', {
				url: '/',
				templateUrl: 'app/views/hi.html',
				controller: 'HiController',
				resolve: {
					controller: function ($q) {
						var deferred = $q.defer();
						require(['controllers/HiController'], function () {
							deferred.resolve();
						});

						return deferred.promise;
					}
				}
			});
		}
	]);
});