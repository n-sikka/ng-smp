(function(){
	'use strict';

	angular
		.module('symptum')
		.directive('searchBar',directive);

		function directive($rootScope, SearchService, $log){
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

			}
			return directive;

			function linkFunction(scope, elem, attr) {
				$rootScope.$on('searched', function(){
					var response = SearchService.get();

					if(response){
						scope.types = ['hospital', 'doctor', 's'];
						scope.results = getGroups(response, ['hospital', 'doctor', 's']);
					}else{
						scope.types = null;
						scope.results = null;
					}


				});
			}


			/*
				params : array of objects, types is object keys
			*/
			function getGroups(array, types){
				
				var data = {};

				types.forEach(function(type) {
					data[type] = [];
				}) 

				array.forEach(function(obj, index) {
					types.forEach(function(type){
						if (obj._type == type) {
							data[type].push(obj)
						}
					})
				})

				return data;

			};

		}
})();
