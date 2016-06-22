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


			function linkFunction(scope, elem, attr) {
				$rootScope.$on('searched', function(){
					var response = SearchService.get();
					var result= [];

					if(response){
						for(var i=0; i<response.length; i++) {
							result[i]=response[i]._source.name;
							scope.results = getGroups(response, ['hospital', 'doctor']);
						}
					}else{
						return;
					}

					$log.info(getGroups(response, ['hospital', 'doctor']));

				});
			}

		}

		
})();
