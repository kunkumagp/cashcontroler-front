require.config({
	paths: {
		'angular': '../vendor/angular/angular.min',
		'angular-route': '../vendor/angular-route/angular-route.min',
		'ui-router': '../vendor/ui-router/release/angular-ui-router.min'
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-route': {
			deps: [
				'angular'
			]
		},
		'ui-router': {
			deps: [
				'angular-route'
			]
		},
		'app': {
			deps: [
				'ui-router'
			]
		}
	}
});

require([
	'angular',
	'bootstrap'
], function(
	angular
){
	angular.bootstrap(document, ['app']);
});