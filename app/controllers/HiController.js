define([
	'app'
], function(
	app
){
	app.controller('HiController', [
		'$scope',
		function(
			$scope
		){
			init();

			function init (){
				$scope.message = "OMG! It works!";
			};
		}
	]);
});