(function() {
	'use strict';

	angular
		.module('symptum')
		.controller('ModalController' , controller);

	function controller($uibModalInstance, modalData){

		var vm = this;

		vm.data = modalData;

		vm.animationsEnabled = true;
		
		vm.close = function () {
			$uibModalInstance.close();
		};

		vm.cancel = function () {
			$uibModalInstance.dismiss('cancel');
		};
	}

})();