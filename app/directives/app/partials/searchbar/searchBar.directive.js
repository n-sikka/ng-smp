(function(){
	'use strict';

	angular
		.module('symptum')
		.directive('searchBar',search);

		function search(){
			var directive = {
				restrict: 'E',
				templateUrl: 'app/views/app/partials/searchBar/searchBar.html',
				controller: 'SearchBarController',
				controllerAs: 'vm'
			};
			return directive;
		}
})();