(function(){
	'use strict';

	angular
		.module('symptum')
		.directive('navbar', nav);

		function nav(){
			var directive = {
				restrict: 'E',
				templateUrl: 'app/views/app/partials/navbar.html',
				controller: 'NavbarController',
				controllerAs: 'vm'
			};
			return directive;
		}
})();