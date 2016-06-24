(function(){
	'use strict';

	angular
		.module('symptum')
		.directive('specialityCard', card);

		function card(){

			var directive = {
				restrict: 'EA',
				templateUrl: 'app/views/app/partials/cards/speciality.html',
				scope: {
          item: '=data'
				}
			}

			return directive;

		}

})();