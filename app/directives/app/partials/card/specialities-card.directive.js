(function(){
	'use strict';

	angular
		.module('symptum')
		.directive('specialitiesCard', card);

		function card(){
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/views/app/partials/card/specialities-card.html',
				controller: 'SpecialitiesCardController',
				controllerAs: 'vm'
			};
			return directive;
		}
})();