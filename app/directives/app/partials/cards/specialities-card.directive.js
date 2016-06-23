(function(){
	'use strict';

	angular
		.module('symptum')
		.directive('specialitiesCard', card);

		function card($location, $uibModal){
			var directive = {
				restrict: 'EA',
				templateUrl: 'app/views/app/partials/cards/specialities-card.html',
				controller: 'SpecialitiesCardController',
				controllerAs: 'vm',
				scope: {
          limit: '=limit',
          loadMore: '=loadmore'
				},
				link: linkFunction
			};
			return directive;

			function linkFunction(scope, element) {
				
				scope.goTo = function(path) {
				  $location.path( path );
		    };

		    scope.openSpecialitiesModal = function() {
					var ModalInstance = $uibModal.open({
						templateUrl: 'app/views/app/partials/modals/specialities-modal.html',
						controller: 'SpecialitiesModalController',
						controllerAs: 'vm',
						size: 'lg',
						scope: scope.specialities
					})
		    	
		    }
/*
		    element.bind('click', specialitiesClick);

		    element.bind('click', '.load-more-specialities', openSpecialitiesModal);
			*/
			}


		}
})();