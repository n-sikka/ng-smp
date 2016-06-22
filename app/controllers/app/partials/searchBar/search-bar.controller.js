angular
	.module('symptum')
	.controller('SearchBarController', controller);


function controller(filterFilter) {

  var vm = this;

  vm.get = function(query){
    console.log(query);
  }
}