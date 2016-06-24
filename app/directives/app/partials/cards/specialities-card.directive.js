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
				
				/*				
					this function sends to route of specility page , it takes route string as path 
				*/
				scope.goTo = function(path) {
				  $location.path( path );
		    };

		    /*
		    	this function opnes a modal for all specilities , parent scope is passed in it as scope
				*/
		    scope.openSpecialitiesModal = function() {
					var ModalInstance = $uibModal.open({
						templateUrl: 'app/views/app/partials/modals/specialities-modal.html',
						controller: 'SpecialitiesModalController',
						controllerAs: 'vm',
						size: 'lg',
						scope: scope.specialities
					})
		    	
		    }
			}


		}
})();