(function(){
	'use strict';

	angular
	.module('symptum')
	.controller('SearchBarController', controller);


	function controller(SearchService) {

		var vm = this;

		vm.set = function(query){
			SearchService.search(query);
		}
	}

})();
