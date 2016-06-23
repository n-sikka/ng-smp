(function() {
	'use strict';

	angular
		.module('symptum')
		.controller('SpecialitiesCardController' , controller);

	function controller(SpecialitiesService){

		var vm = this;
		var getSpecialities = SpecialitiesService.getSpecialities();
		
		getSpecialities.then(function(data){
			vm.specialities = data.data;
		})

	}
})();