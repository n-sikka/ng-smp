(function(){
	'use strict';

	/*
		This directive generates the typeahead for the searchbar and uses 3 params
		and is used internally in search-bar directive
		
		<search-typeahead	query="response"
											groups="type"
											limit="groupItemLimit" >
		</search-typeahead>

		query:  the data we need to aggregate an group
		groups: the key based on which we will group the data we get in 'query'
		limit:  to set the number of elements we need to display in each group
	*/

	angular
		.module('symptum')
		.directive('searchTypeahead',directive);

		function directive(){
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/views/app/partials/search-bar/typeahead.html',
				scope: {
					results: '=query',
          types: '=groups',
          limit: '=limit'
				}
			}

			return directive;

    }

})();
