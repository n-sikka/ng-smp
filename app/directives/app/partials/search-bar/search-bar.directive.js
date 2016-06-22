(function(){
	'use strict';

	angular
		.module('symptum')
		.directive('searchBar',search);

		function search(){
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/views/app/partials/search-bar/search-bar.html',
				controller: 'SearchBarController',
				controllerAs: 'vm',
				scope: {
					groupBy: '@group',
					limitBy: '=limit'
				},
				link: linkFunction,

			};
			return directive;


			function linkFunction(scope, elem, attr) {
				console.log(scope);
			}

		}
})();
