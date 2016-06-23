(function(){
	'use strict';

	angular
		.module('symptum')
		.directive('siteFooter', footer);

		function footer(){
			var directive = {
				restrict: 'E',
				templateUrl: 'app/views/app/partials/footer/footer.html',
				controller: 'FooterController',
				controllerAs: 'vm'
			};
			return directive;
		}
})();
