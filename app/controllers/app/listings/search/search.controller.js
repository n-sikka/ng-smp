angular
  .module('symptum')
  .controller('SearchController', controller);

function controller($stateParams) {
  var vm = this;

  vm.searchQuery = $stateParams.q;
}
