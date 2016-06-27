(function(){
	'use strict';

	/*
		This directive takes in 2 parameters

		group and limit when used

		<search-bar group="<grouping key/headings>"  limit="<data item limits in each group>" ></search-bar>

		it uses SearchService to populate and prettyfy the data.

		we will have to hardcode the typeArray based on the group keys we want to group according to
		as we need to map the group headings we want to make and the group headings we will get in response on search
	*/


	angular
		.module('symptum')
		.directive('searchBar',directive);

		function directive($rootScope, SearchService, $document){
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

			function linkFunction(scope, element) {

				var typeArray = [
					'hospital',
					'doctor',
					's',
					'procedure'
				];


				/*
					The event fired from the SearchService when data is updated from external call
					is caught here using $on and then it updates the view in typeahead
				*/
				$rootScope.$on('searched', function(){
					var response = SearchService.get();

					if(response){
						scope.types = typeArray;
						scope.results = SearchService.getGroups(response, typeArray, '_type');
					}else{
						scope.types = null;
						scope.results = null;
					}
				});
			}

		}


})();
