(function(){
	'use strict';

	angular
	.module('symptum')
	.controller('SearchBarController', controller);


	function controller(SearchService, $log) {

		var vm = this;
		vm.searching = false;

		vm.set = function(query){
			vm.searching = true;
			SearchService.search(query)
										.then(function success(response){
											SearchService.set(response.data);
											vm.searching = false;
										},
										function error(response){
											$log.error(response.statusText);
											vm.searching = false;
										});
		}
	}

})();
