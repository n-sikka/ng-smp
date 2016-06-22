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
					var result= [];

					if(response){
						for(var i=0; i<response.length; i++) {
							result[i]=response[i]._source.name;
						}
					}else{
						return;
					}

					$log.info(result);

				});
			}

		}
})();
