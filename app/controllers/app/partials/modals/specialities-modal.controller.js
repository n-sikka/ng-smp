(function() {
	'use strict';

	angular
		.module('symptum')
		.controller('SpecialitiesModalController' , controller);

	function controller($scope, $uibModalInstance){

		var vm = $scope;

		vm.animationsEnabled = true;
		
		vm.ok = function () {
		 	$uibModalInstance.close();
		};

		vm.cancel = function () {
		 	$uibModalInstance.dismiss('cancel');
		};
	}

})();