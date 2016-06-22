(function(){
	'use strict';

	angular
		.module('symptum')
		.directive('searchBar',directive);

		function directive($rootScope, SearchService){
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/views/app/partials/search-bar/search-bar.html',
				controller: 'SearchBarController',
				controllerAs: 'vm',
				scope: {
					groupBy: '@group',
					limitBy: '=limit'
				},
				link: linkFunction

			}
			return directive;

			function linkFunction(scope) {
				var typeArray = [
					'hospital',
					'doctor',
					's',
					'procedure'
				];

				$rootScope.$on('searched', function(){
					var response = SearchService.get();

					if(response){
						scope.types = typeArray;
						scope.results = getGroups(response, typeArray);
					}else{
						scope.types = null;
						scope.results = null;
					}
				});
			}


			/*
				This function generates an empty array for each type provided.
				and takes the data we are getting in response from backend and divides it into different arrays based on types
			*/
			function getGroups(array, types){

				var data = {};

				types.forEach(function(type) {
					data[type] = [];
				})

				array.forEach(function(obj) {
					types.forEach(function(type){
						if (obj._type == type) {
							data[type].push(obj)
						}
					})
				})

				return data;
			}
		}


})();
