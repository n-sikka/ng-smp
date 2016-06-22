(function(){
	'use strict';

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
